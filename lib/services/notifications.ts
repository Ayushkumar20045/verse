import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  Notification,
  NotificationType,
} from "@/types/notification";

const notificationsRef = collection(
  db,
  "notifications"
);

interface CreateNotificationParams {
  recipientId: string;

  senderId: string;
  senderName: string;
  senderUsername: string;
  senderPhotoURL?: string;

  type: NotificationType;

  postId?: string;
  postPreview?: string;

  commentText?: string;
}
export async function createNotification({
  recipientId,
  senderId,
  senderName,
  senderUsername,
  senderPhotoURL,
  type,
  postId,
  postPreview,
}: CreateNotificationParams) {
  if (recipientId === senderId) {
    return;
  }

const notificationData: Record<string, unknown> = {
  recipientId,

  senderId,
  senderName,
  senderUsername,
  senderPhotoURL,

  type,

  read: false,

  createdAt: serverTimestamp(),
};

if (postId) {
  notificationData.postId = postId;
}

if (postPreview) {
  notificationData.postPreview = postPreview;
}

await addDoc(
  notificationsRef,
  notificationData
);
}

export function subscribeToNotifications(
  userId: string,
  callback: (
    notifications: Notification[]
  ) => void
) {
  const q = query(
    notificationsRef,
    where("recipientId", "==", userId),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const notifications =
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<
          Notification,
          "id"
        >),
      }));

    callback(notifications);
  });
}

export async function markNotificationAsRead(
  notificationId: string
) {
  await updateDoc(
    doc(db, "notifications", notificationId),
    {
      read: true,
    }
  );
}

export async function markAllNotificationsAsRead(
  notifications: Notification[]
) {
  const unread =
    notifications.filter(
      (notification) =>
        !notification.read
    );

  await Promise.all(
    unread.map((notification) =>
      updateDoc(
        doc(
          db,
          "notifications",
          notification.id
        ),
        {
          read: true,
        }
      )
    )
  );
}

export async function deleteNotification(
  notificationId: string
) {
  await deleteDoc(
    doc(db, "notifications", notificationId)
  );
}