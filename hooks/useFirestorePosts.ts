"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getPosts,
} from "@/lib/services/posts";

import {
  FirestorePost,
} from "@/types/firebase";

export default function useFirestorePosts() {
  const [posts, setPosts] =
    useState<FirestorePost[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const firestorePosts =
          await getPosts();

        setPosts(firestorePosts);
      } catch (error) {
        console.error(error);

        setError(
          "Failed to load posts."
        );
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return {
    posts,
    loading,
    error,
  };
}