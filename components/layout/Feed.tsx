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

  return (
    <main className="min-h-screen p-6">
      <PostComposer onPost={handleCreatePost} />

      <section className="mt-6 space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            author={post.author}
            username={post.username}
            time={post.time}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
            isLiked={post.isLiked}
            onLike={() => handleLike(post.id)}
          />
        ))}
      </section>
    </main>
  );
}