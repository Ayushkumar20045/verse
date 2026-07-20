import {
  FirestorePost,
  FirestoreUser,
} from "@/types/firebase";

import { Post } from "@/types/post";

export function mapFirestorePostToPost(
  firestorePost: FirestorePost,
  author?: FirestoreUser
): Post {
  return {
    id: firestorePost.id ?? "",

    userId: firestorePost.userId,

    author:
      author?.displayName ??
      "Unknown User",

    username:
      author?.username ??
      "@unknown",


    time: "Just now",

    content:
      firestorePost.content,

    likes:
      firestorePost.likes,

    bookmarks:
      firestorePost.bookmarks,

    shares:
      firestorePost.shares,

    comments: [],

    isLiked: false,

    isBookmarked: false,
  };
}