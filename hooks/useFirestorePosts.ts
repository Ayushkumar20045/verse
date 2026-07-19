"use client";

import { useEffect, useState } from "react";

import { subscribeToPosts } from "@/lib/services/posts";
import { subscribeToComments } from "@/lib/services/comments";

import { useAuth } from "@/context/AuthContext";

import { mapFirestorePostToPost } from "@/lib/mappers/postMapper";

import {
  FirestorePost,
  FirestoreComment,
} from "@/types/firebase";

import { Post } from "@/types/post";

export default function useFirestorePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    let firestorePosts: FirestorePost[] = [];
    let firestoreComments: FirestoreComment[] = [];

    function updatePosts() {
      const mappedPosts = firestorePosts.map((post) => {
       const mappedPost =
  mapFirestorePostToPost(post);

mappedPost.isLiked =
  !!user &&
  post.likes.includes(user.uid);

mappedPost.isBookmarked =
  !!user &&
  post.bookmarks.includes(user.uid);

mappedPost.comments = firestoreComments
  .filter(
    (comment) => comment.postId === post.id
  )
  .map((comment) => ({
    id: comment.id ?? "",
    userId: comment.userId,
    author: "",
    username: "",
    content: comment.content,
    time: "Just now",
  }));

return mappedPost;
      });

      setPosts(mappedPosts);
      setLoading(false);
      setError(null);
    }

    const unsubscribePosts =
      subscribeToPosts((posts) => {
        firestorePosts = posts;
        updatePosts();
      });

    const unsubscribeComments =
      subscribeToComments((comments) => {
        firestoreComments = comments;
        updatePosts();
      });

    return () => {
      unsubscribePosts();
      unsubscribeComments();
    };
  }, [user]);

  return {
    posts,
    loading,
    error,
  };
}