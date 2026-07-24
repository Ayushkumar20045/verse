"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Bookmark,
  BookmarkCheck,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import formatRelativeTime from "@/lib/utils/formatRelativeTime";

type PostHeaderProps = {
  userId: string;

  author: string;
  username: string;

  createdAt: Date;

  isCurrentUser: boolean;
  isBookmarked: boolean;

  isMenuOpen: boolean;

  onBookmark: () => void;
  onToggleMenu: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function PostHeader({
  userId,
  author,
  username,
  createdAt,
  isCurrentUser,
  isBookmarked,
  isMenuOpen,
  onBookmark,
  onToggleMenu,
  onEdit,
  onDelete,
}: PostHeaderProps) {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((value) => value + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Link
            href={`/profile/${userId}`}
            className="font-semibold transition-colors hover:text-white"
          >
            {author}
          </Link>

          <Link
            href={`/profile/${userId}`}
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            @{username}
          </Link>

          <span className="text-sm text-neutral-500">
            •
          </span>

          <span className="text-sm text-neutral-500">
            {formatRelativeTime(createdAt)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onBookmark}
          className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          {isBookmarked ? (
            <BookmarkCheck
              size={18}
              className="text-white"
            />
          ) : (
            <Bookmark size={18} />
          )}
        </button>

        {isCurrentUser && (
          <div className="relative">
            <button
              onClick={onToggleMenu}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              <MoreHorizontal size={18} />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-10 z-50 w-44 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-xl">
                <button
                  onClick={onEdit}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-neutral-900"
                >
                  <Pencil size={16} />
                  Edit Post
                </button>

                <button
                  onClick={onDelete}
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
    </div>
  );
}