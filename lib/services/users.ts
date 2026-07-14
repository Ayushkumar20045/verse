import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function getUser(
  userId: string
) {
  const userRef = doc(db, "users", userId);

  const snapshot = await getDoc(userRef);

  return snapshot.exists()
    ? snapshot.data()
    : null;
}

export async function createUser(
  userId: string,
  data: Record<string, unknown>
) {
  const userRef = doc(db, "users", userId);

  await setDoc(userRef, data);
}

export async function updateUser(
  userId: string,
  data: Record<string, unknown>
) {
  const userRef = doc(db, "users", userId);

  await updateDoc(userRef, data);
}