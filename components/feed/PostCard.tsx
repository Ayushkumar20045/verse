"use client";

import { useState } from "react";

import Avatar from "@/components/ui/Avatar";
import ConfirmModal from "@/components/ui/ConfirmModal";

import PostHeader from "@/components/feed/PostHeader";
import PostBody from "@/components/feed/PostBody";
import PostActions from "@/components/feed/PostActions";
import CommentSection from "@/components/feed/CommentSection";

import { Post } from "@/types/post";
import { Comment } from "@/types/comment";

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
  const isCurrentUser = post.userId === "user-1";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [editedContent, setEditedContent] =
    useState(post.content);

  const [showComments, setShowComments] =
    useState(false);

  const [comments, setComments] =
    useState<Comment[]>(post.comments);

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

  function handleAddComment(content: string) {
    const newComment: Comment = {
      id: Date.now(),
      userId: "user-1",
      author: "Ayush Kumar",
      username: "@ayushkumar",
      content,
      time: "Just now",
    };

    setComments((previous) => [
      ...previous,
      newComment,
    ]);
  }

  function handleEditComment(
    commentId: number,
    content: string
  ) {
    setComments((previous) =>
      previous.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              content,
              time: "Just now (edited)",
            }
          : comment
      )
    );
  }

  function handleDeleteComment(
    commentId: number
  ) {
    setComments((previous) =>
      previous.filter(
        (comment) =>
          comment.id !== commentId
      )
    );
  }

  return (
    <>
      <article className="rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
        <div className="flex items-start gap-4">
          <Avatar name={post.author} />

          <div className="flex-1">
            <PostHeader
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
              onCancel={handleCancelEdit}
            />

            {!isEditing && (
              <PostActions
                likes={post.likes}
                comments={comments.length}
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
              comments={comments}
              onComment={handleAddComment}
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
        onConfirm={handleConfirmDelete}
        onCancel={() =>
          setIsDeleteModalOpen(false)
        }
      />
    </>
  );
}