import { Timestamp } from "firebase/firestore";

export interface FirestoreUser {
  uid: string;

  displayName: string;

  username: string;

  email: string;

  photoURL: string;

  bio: string;

  joinedAt: Timestamp;

  followers: string[];

  following: string[];

  isPrivate: boolean;
}

export interface FirestorePost {
  id?: string;

  userId: string;

  content: string;

  createdAt: Timestamp;

  likes: string[];

  bookmarks: string[];

  shares: number;

  commentCount: number;
}

export interface FirestoreComment {
  id?: string;

  postId: string;

  userId: string;

  content: string;

  createdAt: Timestamp;
}