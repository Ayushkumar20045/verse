import { Timestamp } from "firebase/firestore";

export type NotificationType =
  | "follow"
  | "like"
  | "comment";

export interface Notification {
  id: string;

  recipientId: string;

  senderId: string;
  senderName: string;
  senderUsername: string;
  senderPhotoURL?: string;

  type: NotificationType;

  postId?: string;

  postPreview?: string;

  commentText?: string;

  read: boolean;

  createdAt: Timestamp;
}