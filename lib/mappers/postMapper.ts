import { FirestorePost } from "@/types/firebase";
import { Post } from "@/types/post";

export function mapFirestorePostToPost(
  firestorePost: FirestorePost
): Post {
  return {
    id: firestorePost.id ?? "",
    userId: firestorePost.userId,

    // Temporary until Firestore users are integrated
    author: "",
    username: "",
    time: "Just now",

    content: firestorePost.content,

    likes: firestorePost.likes.length,
    shares: firestorePost.shares,

    comments: [],

    isLiked: false,
    isBookmarked: false,
  };
}