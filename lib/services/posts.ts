import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const postsCollection =
  collection(db, "posts");

export async function getPosts() {
  const snapshot =
    await getDocs(postsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createPost(
  data: Record<string, unknown>
) {
  return await addDoc(
    postsCollection,
    data
  );
}

export async function updatePost(
  postId: string,
  data: Record<string, unknown>
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