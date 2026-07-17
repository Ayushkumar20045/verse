import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  DocumentData,
  updateDoc,
  Timestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { FirestorePost } from "@/types/firebase";

const postsCollection = collection(db, "posts");

const postsQuery = query(
  postsCollection,
  orderBy("createdAt", "desc")
);

export async function getPosts(): Promise<
  FirestorePost[]
> {
  const snapshot = await getDocs(postsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<
      FirestorePost,
      "id"
    >),
  }));
}

export function subscribeToPosts(
  callback: (
    posts: FirestorePost[]
  ) => void
) {
  return onSnapshot(
    postsQuery,
    (
      snapshot: QuerySnapshot<DocumentData>
    ) => {
      const posts = snapshot.docs.map(
        (document) => ({
          id: document.id,
          ...(document.data() as Omit<
            FirestorePost,
            "id"
          >),
        })
      );

      callback(posts);
    }
  );
}

export async function createPost({
  userId,
  content,
}: {
  userId: string;
  content: string;
}): Promise<string> {
  const document = await addDoc(
    postsCollection,
    {
      userId,
      content,
      createdAt: Timestamp.now(),
      likes: [],
      bookmarks: [],
      shares: 0,
      commentCount: 0,
    }
  );

  return document.id;
}

export async function updatePost(
  postId: string,
  data: Partial<FirestorePost>
) {
  await updateDoc(
    doc(db, "posts", postId),
    data
  );
}

export async function deletePost(
  postId: string
) {
  await deleteDoc(
    doc(db, "posts", postId)
  );
}