"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Repeat2,
  Trash2,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import CommentComposer from "@/components/feed/CommentComposer";
import CommentList from "@/components/feed/CommentList";
import ConfirmModal from "@/components/ui/ConfirmModal";

import { Post } from "@/types/post";
import { Comment } from "@/types/comment";

type PostCardProps = {
  post: Post;
  onLike: () => void;
  onDelete: () => void;
  onEdit: (content: string) => void;
};

export default function PostCard({
  post,
  onLike,
  onDelete,
  onEdit,
}: PostCardProps) {
  const isCurrentUser = post.userId === "user-1";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(
    post.content
  );

  const [showComments, setShowComments] =
    useState(false);

  const [comments, setComments] = useState<Comment[]>(
    post.comments
  );

  function handleDeleteClick() {
    setIsMenuOpen(false);
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete() {
    onDelete();
    setIsDeleteModalOpen(false);
  }

  function handleCancelDelete() {
    setIsDeleteModalOpen(false);
  }

  function handleEditClick() {
    setEditedContent(post.content);
    setIsEditing(true);
    setIsMenuOpen(false);
  }

  function handleSaveEdit() {
    const trimmedContent = editedContent.trim();

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

    setComments((previousComments) => [
      ...previousComments,
      newComment,
    ]);
  }

  function handleEditComment(
    commentId: number,
    content: string
  ) {
    setComments((previousComments) =>
      previousComments.map((comment) => {
        if (comment.id !== commentId) {
          return comment;
        }

        return {
          ...comment,
          content,
          time: "Just now (edited)",
        };
      })
    );
  }

  function handleDeleteComment(commentId: number) {
    setComments((previousComments) =>
      previousComments.filter(
        (comment) => comment.id !== commentId
      )
    );
  }

  return (
    <>
          <article className="rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
        <div className="flex items-start gap-4">
          <Avatar name={post.author} />

          <div className="flex-1">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">
                    {post.author}
                  </h3>

                  <span className="text-sm text-neutral-500">
                    {post.username}
                  </span>

                  <span className="text-sm text-neutral-500">
                    •
                  </span>

                  <span className="text-sm text-neutral-500">
                    {post.time}
                  </span>
                </div>
              </div>

              {isCurrentUser && (
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsMenuOpen(!isMenuOpen)
                    }
                    className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
                  >
                    <MoreHorizontal size={18} />
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 top-10 z-50 w-44 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-xl">
                      <button
                        onClick={handleEditClick}
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-neutral-900"
                      >
                        <Pencil size={16} />
                        Edit Post
                      </button>

                      <button
                        onClick={handleDeleteClick}
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 transition-colors hover:bg-neutral-900"
                      >
                        <Trash2 size={16} />
                        Delete Post
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {isEditing ? (
              <>
                <textarea
                  rows={4}
                  value={editedContent}
                  onChange={(event) =>
                    setEditedContent(event.target.value)
                  }
                  className="mt-3 w-full resize-none rounded-lg border border-neutral-800 bg-transparent p-4 outline-none focus:border-neutral-600"
                />

                <div className="mt-4 flex justify-end gap-3">
                  <button
                    onClick={handleCancelEdit}
                    className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSaveEdit}
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200"
                  >
                    Save Changes
                  </button>
                </div>
              </>
            ) : (
              <p className="mt-3 leading-7">
                {post.content}
              </p>
            )}

            {!isEditing && (
              <div className="mt-6 flex items-center gap-8 text-sm">
                <button
                  onClick={onLike}
                  className={`flex items-center gap-2 transition-colors ${
                    post.isLiked
                      ? "text-red-500"
                      : "text-neutral-500 hover:text-red-500"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={
                      post.isLiked
                        ? "currentColor"
                        : "none"
                    }
                  />
                  <span>{post.likes}</span>
                </button>

                <button
                  onClick={() =>
                    setShowComments(!showComments)
                  }
                  className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-blue-500"
                >
                  <MessageCircle size={18} />
                  <span>{comments.length}</span>
                </button>

                <button className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-green-500">
                  <Repeat2 size={18} />
                  <span>{post.shares}</span>
                </button>
              </div>
            )}

            {showComments && (
              <div className="mt-6">
                <CommentComposer
                  onComment={handleAddComment}
                />

                <CommentList
                  comments={comments}
                  onEdit={handleEditComment}
                  onDelete={handleDeleteComment}
                />
              </div>
            )}
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
        onCancel={handleCancelDelete}
      />
    </>
  );
}