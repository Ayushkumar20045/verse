"use client";
import { useUser } from "@/context/UserContext";

import { createNotification } from "@/lib/services/notifications";
import {
  createContext,
  ReactNode,
  useContext,
} from "react";

import useFirestorePosts from "@/hooks/useFirestorePosts";
import { useAuth } from "@/context/AuthContext";
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

  likePost: (postId: string) => Promise<void>;

  bookmarkPost: (
    postId: string
  ) => Promise<void>;

  deletePost: (
    postId: string
  ) => Promise<void>;

  editPost: (
    postId: string,
    content: string
  ) => Promise<void>;

  addComment: (
    postId: string,
    content: string
  ) => Promise<void>;

editComment: (
  commentId: string,
  content: string
) => Promise<void>;

deleteComment: (
  commentId: string
) => Promise<void>;
};

const PostsContext =
  createContext<PostsContextType | null>(null);

export function PostsProvider({
  children,
}: {
  children: ReactNode;
}) {
const { user } = useAuth();

const { profile } = useUser();

const { posts } = useFirestorePosts();

async function createPost(content: string) {
  if (!user) return;

  await createFirestorePost({
    userId: user.uid,
    content,
  });
}
async function likePost(postId: string) {
  if (!user || !profile) return;

  const post = posts.find((post) => post.id === postId);

  if (!post) return;

  const alreadyLiked = post.likes.includes(user.uid);

  const updatedLikes = alreadyLiked
    ? post.likes.filter((uid) => uid !== user.uid)
    : [...post.likes, user.uid];

  await updatePost(postId, {
    likes: updatedLikes,
  });

  if (
    !alreadyLiked &&
    post.userId !== user.uid
  ) {
    await createNotification({
      recipientId: post.userId,

      senderId: profile.uid,
      senderName: profile.displayName,
      senderUsername: profile.username,
      senderPhotoURL: profile.photoURL,

      type: "like",

      postId,

      postPreview: post.content.slice(0, 80),
    });
  }
}

async function bookmarkPost(postId: string) {
  if (!user) return;

  const post = posts.find((post) => post.id === postId);

  if (!post) return;

  const updatedBookmarks = post.bookmarks.includes(user.uid)
    ? post.bookmarks.filter((uid) => uid !== user.uid)
    : [...post.bookmarks, user.uid];

  await updatePost(postId, {
    bookmarks: updatedBookmarks,
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
  if (!user || !profile) return;

  const post = posts.find(
    (post) => post.id === postId
  );

  if (!post) return;

  await createFirestoreComment({
    postId,
    userId: user.uid,
    content,
    createdAt: new Date() as never,
  });

  if (post.userId !== user.uid) {
    await createNotification({
      recipientId: post.userId,

      senderId: profile.uid,
      senderName: profile.displayName,
      senderUsername: profile.username,
      senderPhotoURL: profile.photoURL,

      type: "comment",

      postId,

      postPreview: post.content.slice(0, 80),

      commentText: content,
    });
  }
}

async function editComment(
  commentId: string,
  content: string
) {
  await updateFirestoreComment(commentId, {
    content,
  });
}

async function deleteComment(
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