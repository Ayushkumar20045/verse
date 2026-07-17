"use client";

import { useEffect, useState } from "react";

import { subscribeToPosts } from "@/lib/services/posts";
import { mapFirestorePostToPost } from "@/lib/mappers/postMapper";
import { Post } from "@/types/post";

export default function useFirestorePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToPosts((firestorePosts) => {
      const mappedPosts = firestorePosts.map(
        mapFirestorePostToPost
      );

      setPosts(mappedPosts);
      setLoading(false);
      setError(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    posts,
    loading,
    error,
  };
}