"use client";

import { useState } from "react";

import PostComposer from "@/components/feed/PostComposer";
import PostCard from "@/components/feed/PostCard";
import { posts as initialPosts } from "@/lib/posts";
import { Post } from "@/types/post";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  function handleCreatePost(content: string) {
    const newPost: Post = {
      id: Date.now(),
      userId: "user-1",
      author: "Ayush Kumar",
      username: "@ayushkumar",
      time: "Just now",
      content,

      likes: 0,
      comments: 0,
      shares: 0,

      isLiked: false,
    };

    setPosts((previousPosts) => [newPost, ...previousPosts]);
  }

  function handleLike(postId: number) {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked
            ? post.likes - 1
            : post.likes + 1,
        };
      })
    );
  }

  function handleDelete(postId: number) {
    setPosts((previousPosts) =>
      previousPosts.filter((post) => post.id !== postId)
    );
  }
function handleEdit(postId: number, content: string) {
  setPosts((previousPosts) =>
    previousPosts.map((post) => {
      if (post.id !== postId) {
        return post;
      }

      return {
        ...post,
        content,
        time: "Just now (edited)",
      };
    })
  );
}
  return (
    <main className="min-h-screen p-6">
      <PostComposer onPost={handleCreatePost} />

      <section className="mt-6 space-y-6">
        {posts.map((post) => (
<PostCard
  key={post.id}
  post={post}
  onLike={() => handleLike(post.id)}
  onDelete={() => handleDelete(post.id)}
  onEdit={(content) => handleEdit(post.id, content)}
/>
        ))}
      </section>
    </main>
  );
}