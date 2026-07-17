"use client";

import useFirestorePosts from "@/hooks/useFirestorePosts";
import { createPost } from "@/lib/services/posts";

export default function FirebaseTestPage() {
  const {
    posts,
    loading,
    error,
  } = useFirestorePosts();

  async function handleCreatePost() {
    try {
      const id = await createPost({
        userId: "user-1",
        content:
          "Hello Firestore! This is Verse's first real post we have done it.",
      });

      alert(`Post created!\n\nID: ${id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to create post.");
    }
  }

  if (loading) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">
          Loading posts...
        </h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-red-500">
          {error}
        </h1>
      </main>
    );
  }

  return (
    <main className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">
        Firestore Test
      </h1>

      <button
        onClick={handleCreatePost}
        className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-neutral-300"
      >
        Create Test Post
      </button>

      <p className="text-neutral-500">
        Posts loaded: {posts.length}
      </p>

      <pre className="overflow-auto rounded-xl bg-neutral-900 p-6 text-sm">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  );
}