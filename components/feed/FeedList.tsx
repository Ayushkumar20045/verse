"use client";

import { Newspaper } from "lucide-react";

import PostCard from "@/components/feed/PostCard";

import { Post } from "@/types/post";

type FeedListProps = {
  posts: Post[];

  onLike: (postId: string) => Promise<void>;
  onBookmark: (postId: string) => Promise<void>;
  onDelete: (postId: string) => Promise<void>;
  onEdit: (
    postId: string,
    content: string
  ) => Promise<void>;
};

export default function FeedList({
  posts,
  onLike,
  onBookmark,
  onDelete,
  onEdit,
}: FeedListProps) {
  if (posts.length === 0) {
    return (
      <section className="mt-6 flex h-[55vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
          <Newspaper
            size={36}
            className="text-neutral-400"
          />
        </div>

        <h2 className="text-2xl font-semibold">
          No posts yet
        </h2>

        <p className="mt-3 max-w-md text-neutral-500">
          Be the first to start a conversation.
          Share your thoughts, ideas, or updates
          with the Verse community.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-6 space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
          onBookmark={() =>
            onBookmark(post.id)
          }
          onDelete={() =>
            onDelete(post.id)
          }
          onEdit={(content) =>
            onEdit(post.id, content)
          }
        />
      ))}
    </section>
  );
}