"use client";

import {
  useEffect,
  useState,
} from "react";

import { subscribeToPosts } from "@/lib/services/posts";
import { FirestorePost } from "@/types/firebase";

export default function useFirestorePosts() {
  const [posts, setPosts] =
    useState<FirestorePost[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const unsubscribe =
      subscribeToPosts((firestorePosts) => {
        setPosts(firestorePosts);
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