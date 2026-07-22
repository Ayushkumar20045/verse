import {
  doc,
  runTransaction,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function followUser(
  currentUserId: string,
  targetUserId: string
) {
  if (currentUserId === targetUserId) {
    return;
  }

  await runTransaction(
    db,
    async (transaction) => {
      const currentUserRef = doc(
        db,
        "users",
        currentUserId
      );

      const targetUserRef = doc(
        db,
        "users",
        targetUserId
      );

      const currentSnapshot =
        await transaction.get(currentUserRef);

      const targetSnapshot =
        await transaction.get(targetUserRef);

      if (
        !currentSnapshot.exists() ||
        !targetSnapshot.exists()
      ) {
        throw new Error(
          "User not found."
        );
      }

      const currentUser =
        currentSnapshot.data();

      const targetUser =
        targetSnapshot.data();

      const following =
        currentUser.following ?? [];

      const followers =
        targetUser.followers ?? [];

      if (
        following.includes(targetUserId)
      ) {
        return;
      }

      transaction.update(
        currentUserRef,
        {
          following: [
            ...following,
            targetUserId,
          ],
        }
      );

      transaction.update(
        targetUserRef,
        {
          followers: [
            ...followers,
            currentUserId,
          ],
        }
      );
    }
  );
}

export async function unfollowUser(
  currentUserId: string,
  targetUserId: string
) {
  if (currentUserId === targetUserId) {
    return;
  }

  await runTransaction(
    db,
    async (transaction) => {
      const currentUserRef = doc(
        db,
        "users",
        currentUserId
      );

      const targetUserRef = doc(
        db,
        "users",
        targetUserId
      );

      const currentSnapshot =
        await transaction.get(currentUserRef);

      const targetSnapshot =
        await transaction.get(targetUserRef);

      if (
        !currentSnapshot.exists() ||
        !targetSnapshot.exists()
      ) {
        throw new Error(
          "User not found."
        );
      }

      const currentUser =
        currentSnapshot.data();

      const targetUser =
        targetSnapshot.data();

      transaction.update(
        currentUserRef,
        {
          following:
            (
              currentUser.following ??
              []
            ).filter(
              (id: string) =>
                id !== targetUserId
            ),
        }
      );

      transaction.update(
        targetUserRef,
        {
          followers:
            (
              targetUser.followers ??
              []
            ).filter(
              (id: string) =>
                id !== currentUserId
            ),
        }
      );
    }
  );
}

export function isFollowing(
  following: string[],
  targetUserId: string
) {
  return following.includes(
    targetUserId
  );
}