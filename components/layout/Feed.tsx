"use client";

import PostComposer from "@/components/feed/PostComposer";
import PostCard from "@/components/feed/PostCard";
import { usePosts } from "@/context/PostsContext";

export default function Feed() {
  const {
    posts,
    createPost,
    likePost,
    bookmarkPost,
    deletePost,
    editPost,
  } = usePosts();

  return (
    <main className="min-h-screen p-6">
      <PostComposer onPost={createPost} />

      <section className="mt-6 space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={() => likePost(post.id)}
            onBookmark={() => bookmarkPost(post.id)}
            onDelete={() => deletePost(post.id)}
            onEdit={(content) =>
              editPost(post.id, content)
            }
          />
        ))}
      </section>
    </main>
  );
}