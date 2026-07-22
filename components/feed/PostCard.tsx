"use client";

import Link from "next/link";
import { useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { usePosts } from "@/context/PostsContext";

import Avatar from "@/components/ui/Avatar";
import ConfirmModal from "@/components/ui/ConfirmModal";

import PostHeader from "@/components/feed/PostHeader";
import PostBody from "@/components/feed/PostBody";
import PostActions from "@/components/feed/PostActions";
import CommentSection from "@/components/feed/CommentSection";

import { Post } from "@/types/post";

type PostCardProps = {
  post: Post;
  onLike: () => void;
  onBookmark: () => void;
  onDelete: () => void;
  onEdit: (content: string) => void;
};

export default function PostCard({
  post,
  onLike,
  onBookmark,
  onDelete,
  onEdit,
}: PostCardProps) {
  const { user } = useAuth();

  const {
    addComment,
    editComment,
    deleteComment,
  } = usePosts();

  const isCurrentUser =
    user?.uid === post.userId;

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  ] = useState(false);

  const [isEditing, setIsEditing] =
    useState(false);

  const [
    editedContent,
    setEditedContent,
  ] = useState(post.content);

  const [
    showComments,
    setShowComments,
  ] = useState(false);

  function handleDeleteClick() {
    setIsMenuOpen(false);
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete() {
    onDelete();
    setIsDeleteModalOpen(false);
  }

  function handleEditClick() {
    setEditedContent(post.content);
    setIsEditing(true);
    setIsMenuOpen(false);
  }

  function handleSaveEdit() {
    const trimmedContent =
      editedContent.trim();

    if (!trimmedContent) {
      return;
    }

    onEdit(trimmedContent);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setEditedContent(post.content);
    setIsEditing(false);
  }

  function handleAddComment(
    content: string
  ) {
    addComment(post.id, content);
  }

  function handleEditComment(
    commentId: string,
    content: string
  ) {
    editComment(commentId, content);
  }

  function handleDeleteComment(
    commentId: string
  ) {
    deleteComment(commentId);
  }

  return (
    <>
      <article className="rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
        <div className="flex items-start gap-4">
          <Link href={`/profile/${post.userId}`}>
            <Avatar
              name={post.author}
              size="md"
            />
          </Link>

          <div className="flex-1">
            <PostHeader
              userId={post.userId}
              author={post.author}
              username={post.username}
              time={post.time}
              isCurrentUser={isCurrentUser}
              isBookmarked={post.isBookmarked}
              isMenuOpen={isMenuOpen}
              onBookmark={onBookmark}
              onToggleMenu={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />

            <PostBody
              isEditing={isEditing}
              content={post.content}
              editedContent={editedContent}
              onContentChange={
                setEditedContent
              }
              onSave={handleSaveEdit}
              onCancel={
                handleCancelEdit
              }
            />

            {!isEditing && (
              <PostActions
                likes={post.likes.length}
                comments={
                  post.comments.length
                }
                shares={post.shares}
                isLiked={post.isLiked}
                onLike={onLike}
                onToggleComments={() =>
                  setShowComments(
                    !showComments
                  )
                }
              />
            )}

            <CommentSection
              isVisible={showComments}
              comments={post.comments}
              onComment={
                handleAddComment
              }
              onEditComment={
                handleEditComment
              }
              onDeleteComment={
                handleDeleteComment
              }
            />
          </div>
        </div>
      </article>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Delete Post"
        description="This action cannot be undone. The post will be permanently removed."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={
          handleConfirmDelete
        }
        onCancel={() =>
          setIsDeleteModalOpen(false)
        }
      />
    </>
  );
}