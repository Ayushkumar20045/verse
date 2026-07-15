import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  FirestorePost,
} from "@/types/firebase";

const postsCollection =
  collection(db, "posts");

export async function getPosts(): Promise<
  FirestorePost[]
> {
  const snapshot =
    await getDocs(postsCollection);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...(document.data() as Omit<
      FirestorePost,
      "id"
    >),
  }));
}

export async function createPost(
  post: FirestorePost
): Promise<string> {
  const document = await addDoc(
    postsCollection,
    post
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