"use client";

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
  return (
    <section className="mt-6 space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
          onBookmark={() => onBookmark(post.id)}
          onDelete={() => onDelete(post.id)}
          onEdit={(content) =>
            onEdit(post.id, content)
          }
        />
      ))}
    </section>
  );
}