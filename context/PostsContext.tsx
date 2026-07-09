"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { posts as initialPosts } from "@/lib/posts";
import { Comment } from "@/types/comment";
import { Post } from "@/types/post";

type PostsContextType = {
  posts: Post[];

  createPost: (content: string) => void;
  likePost: (postId: number) => void;
  bookmarkPost: (postId: number) => void;
  deletePost: (postId: number) => void;
  editPost: (postId: number, content: string) => void;

  addComment: (
    postId: number,
    content: string
  ) => void;

  editComment: (
    postId: number,
    commentId: number,
    content: string
  ) => void;

  deleteComment: (
    postId: number,
    commentId: number
  ) => void;
};

const PostsContext =
  createContext<PostsContextType | null>(null);

export function PostsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [posts, setPosts] =
    useState<Post[]>(initialPosts);

  function createPost(content: string) {
    const newPost: Post = {
      id: Date.now(),
      userId: "user-1",
      author: "Ayush Kumar",
      username: "@ayushkumar",
      time: "Just now",
      content,

      likes: 0,
      comments: [],
      shares: 0,

      isLiked: false,
      isBookmarked: false,
    };

    setPosts((previousPosts) => [
      newPost,
      ...previousPosts,
    ]);
  }

  function likePost(postId: number) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );
  }

  function bookmarkPost(postId: number) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isBookmarked: !post.isBookmarked,
            }
          : post
      )
    );
  }

  function deletePost(postId: number) {
    setPosts((previousPosts) =>
      previousPosts.filter(
        (post) => post.id !== postId
      )
    );
  }

  function editPost(
    postId: number,
    content: string
  ) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              content,
              time: "Just now (edited)",
            }
          : post
      )
    );
  }

  function addComment(
    postId: number,
    content: string
  ) {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) return post;

        const newComment: Comment = {
          id: Date.now(),
          userId: "user-1",
          author: "Ayush Kumar",
          username: "@ayushkumar",
          content,
          time: "Just now",
        };

        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      })
    );
  }

  function editComment(
    postId: number,
    commentId: number,
    content: string
  ) {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) return post;

        return {
          ...post,
          comments: post.comments.map((comment) =>
            comment.id === commentId
              ? {
                  ...comment,
                  content,
                  time: "Just now (edited)",
                }
              : comment
          ),
        };
      })
    );
  }

  function deleteComment(
    postId: number,
    commentId: number
  ) {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== postId) return post;

        return {
          ...post,
          comments: post.comments.filter(
            (comment) =>
              comment.id !== commentId
          ),
        };
      })
    );
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        createPost,
        likePost,
        bookmarkPost,
        deletePost,
        editPost,
        addComment,
        editComment,
        deleteComment,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error(
      "usePosts must be used within a PostsProvider."
    );
  }

  return context;
}