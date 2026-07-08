"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { Comment } from "@/types/comment";

type CommentCardProps = {
  comment: Comment;
  onEdit: (content: string) => void;
  onDelete: () => void;
};

export default function CommentCard({
  comment,
  onEdit,
  onDelete,
}: CommentCardProps) {
  const isCurrentUser = comment.userId === "user-1";

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);

  function handleSaveEdit() {
    const trimmedContent = editedContent.trim();

    if (!trimmedContent) {
      return;
    }

    onEdit(trimmedContent);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setEditedContent(comment.content);
    setIsEditing(false);
  }

  function handleDelete() {
    onDelete();
    setIsDeleteModalOpen(false);
  }

  return (
    <>
      <div className="mt-4 rounded-xl border border-neutral-800 p-4">
        <div className="flex items-start gap-3">
          <Avatar name={comment.author} />

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">
                    {comment.author}
                  </h4>

                  <span className="text-sm text-neutral-500">
                    {comment.username}
                  </span>

                  <span className="text-sm text-neutral-500">
                    •
                  </span>

                  <span className="text-sm text-neutral-500">
                    {comment.time}
                  </span>
                </div>
              </div>

              {isCurrentUser && (
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsMenuOpen(!isMenuOpen)
                    }
                    className="rounded-full p-2 text-neutral-500 hover:bg-neutral-900"
                  >
                    <MoreHorizontal size={18} />
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 top-10 z-50 w-40 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-xl">
                      <button
                        onClick={() => {
                          setIsEditing(true);
                          setIsMenuOpen(false);
                        }}
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-neutral-900"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setIsDeleteModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-neutral-900"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {isEditing ? (
              <>
                <textarea
                  rows={3}
                  value={editedContent}
                  onChange={(event) =>
                    setEditedContent(event.target.value)
                  }
                  className="mt-3 w-full resize-none rounded-lg border border-neutral-800 bg-transparent p-3 outline-none"
                />

                <div className="mt-3 flex justify-end gap-3">
                  <button
                    onClick={handleCancelEdit}
                    className="rounded-lg border border-neutral-700 px-4 py-2"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSaveEdit}
                    className="rounded-lg bg-white px-4 py-2 text-black"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <p className="mt-3">
                {comment.content}
              </p>
            )}
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Delete Comment"
        description="This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() =>
          setIsDeleteModalOpen(false)
        }
      />
    </>
  );
}