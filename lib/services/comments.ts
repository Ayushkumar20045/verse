import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const commentsCollection =
  collection(db, "comments");

export async function getComments() {
  const snapshot =
    await getDocs(
      commentsCollection
    );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createComment(
  data: Record<string, unknown>
) {
  return await addDoc(
    commentsCollection,
    data
  );
}

export async function updateComment(
  commentId: string,
  data: Record<string, unknown>
) {
  await updateDoc(
    doc(
      db,
      "comments",
      commentId
    ),
    data
  );
}

export async function deleteComment(
  commentId: string
) {
  await deleteDoc(
    doc(
      db,
      "comments",
      commentId
    )
  );
}