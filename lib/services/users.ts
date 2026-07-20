import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  serverTimestamp,
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

  return {
    uid: snapshot.id,
    ...(snapshot.data() as Omit<
      FirestoreUser,
      "uid"
    >),
  };
}

export function subscribeToUsers(
  callback: (
    users: FirestoreUser[]
  ) => void
) {
  const usersQuery = query(
    collection(db, "users")
  );

  return onSnapshot(
    usersQuery,
    (snapshot) => {
      const users =
        snapshot.docs.map((doc) => ({
          uid: doc.id,
          ...(doc.data() as Omit<
            FirestoreUser,
            "uid"
          >),
        }));

      callback(users);
    }
  );
}

export async function createUser(
  user: Omit<
    FirestoreUser,
    "joinedAt"
  >
) {
  const userRef = doc(
    db,
    "users",
    user.uid
  );

  const snapshot =
    await getDoc(userRef);

  if (snapshot.exists()) {
    return;
  }

  await setDoc(
    userRef,
    {
      ...user,
      joinedAt: serverTimestamp(),
    },
    {
      merge: true,
    }
  );
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