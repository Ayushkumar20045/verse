import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  FirestoreComment,
} from "@/types/firebase";

const commentsCollection =
  collection(db, "comments");

export async function getComments(): Promise<
  FirestoreComment[]
> {
  const snapshot =
    await getDocs(
      commentsCollection
    );

  return snapshot.docs.map(
    (document) => ({
      id: document.id,
      ...(document.data() as Omit<
        FirestoreComment,
        "id"
      >),
    })
  );
}
export function subscribeToComments(
  callback: (
    comments: FirestoreComment[]
  ) => void
) {
  return onSnapshot(
    commentsCollection,
    (
      snapshot: QuerySnapshot<DocumentData>
    ) => {
      const comments = snapshot.docs.map(
        (document) => ({
          id: document.id,
          ...(document.data() as Omit<
            FirestoreComment,
            "id"
          >),
        })
      );

      callback(comments);
    }
  );
}

export async function createComment(
  comment: FirestoreComment
) {
  return await addDoc(
    commentsCollection,
    comment
  );
}

export async function updateComment(
  commentId: string,
  data: Partial<FirestoreComment>
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