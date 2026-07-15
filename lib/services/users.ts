import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  FirestoreUser,
} from "@/types/firebase";

export async function getUser(
  userId: string
): Promise<FirestoreUser | null> {
  const userRef = doc(
    db,
    "users",
    userId
  );

  const snapshot =
    await getDoc(userRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as FirestoreUser;
}

export async function createUser(
  user: FirestoreUser
) {
  const userRef = doc(
    db,
    "users",
    user.uid
  );

  await setDoc(userRef, user);
}

export async function updateUser(
  userId: string,
  data: Partial<FirestoreUser>
) {
  const userRef = doc(
    db,
    "users",
    userId
  );

  await updateDoc(
    userRef,
    data
  );
}