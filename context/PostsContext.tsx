"use client";

import {
  createContext,
  ReactNode,
  useContext,
} from "react";

import useFirestorePosts from "@/hooks/useFirestorePosts";
import { Post } from "@/types/post";
import {
  createComment as createFirestoreComment,
  updateComment as updateFirestoreComment,
  deleteComment as deleteFirestoreComment,
} from "@/lib/services/comments";
import {
  createPost as createFirestorePost,
  deletePost as deleteFirestorePost,
  updatePost,
} from "@/lib/services/posts";

type PostsContextType = {
  posts: Post[];

  createPost: (content: string) => Promise<void>;

  likePost: (postId: string) => void;

  bookmarkPost: (postId: string) => void;

  deletePost: (postId: string) => void;

  editPost: (
    postId: string,
    content: string
  ) => void;

  addComment: (
    postId: string,
    content: string
  ) => void;

  editComment: (
    postId: string,
    commentId: number,
    content: string
  ) => void;

  deleteComment: (
    postId: string,
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
const { posts } = useFirestorePosts();

async function createPost(content: string) {
  await createFirestorePost({
    userId: "user-1",
    content,
  });
}
async function likePost(postId: string) {
  const post = posts.find((post) => post.id === postId);

  if (!post) return;

  await updatePost(postId, {
    likes: [],
  });
}

async function bookmarkPost(postId: string) {
  const post = posts.find((post) => post.id === postId);

  if (!post) return;

  await updatePost(postId, {
    isBookmarked: !post.isBookmarked,
  });
}

async function deletePost(postId: string) {
  await deleteFirestorePost(postId);
}
async function editPost(
  postId: string,
  content: string
) {
  await updatePost(postId, {
    content,
  });
}

async function addComment(
  postId: string,
  content: string
) {
  await createFirestoreComment({
    postId,
    userId: "user-1",
    content,
    createdAt: new Date() as never,
  });
}

async function editComment(
  postId: string,
  commentId: string,
  content: string
) {
  await updateFirestoreComment(commentId, {
    content,
  });
}

async function deleteComment(
  postId: string,
  commentId: string
) {
  await deleteFirestoreComment(commentId);
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