"use client";

import Link from "next/link";

import { Heart, MessageCircle, UserPlus } from "lucide-react";

import Avatar from "@/components/ui/Avatar";

import { Notification } from "@/types/notification";

interface NotificationCardProps {
  notification: Notification;
}

export default function NotificationCard({
  notification,
}: NotificationCardProps) {
  const icon =
    notification.type === "follow" ? (
      <UserPlus
        size={18}
        className="text-sky-500"
      />
    ) : notification.type ===
      "like" ? (
      <Heart
        size={18}
        className="fill-red-500 text-red-500"
      />
    ) : (
      <MessageCircle
        size={18}
        className="text-emerald-500"
      />
    );

  const message =
    notification.type === "follow"
      ? "started following you."
      : notification.type === "like"
      ? "liked your post."
      : "commented on your post.";

  const createdAt =
    notification.createdAt?.toDate();

  const time =
    createdAt
      ? createdAt.toLocaleString()
      : "Just now";

  return (
    <Link
      href={`/profile/${notification.senderId}`}
      className={`flex items-start gap-4 border-b border-neutral-800 p-5 transition-colors hover:bg-neutral-900 ${
        !notification.read
          ? "bg-neutral-950"
          : ""
      }`}
    >
      <Avatar
        name={
          notification.senderName
        }
        photoURL={
          notification.senderPhotoURL
        }
        size="md"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {icon}

          <span className="font-semibold">
            {
              notification.senderName
            }
          </span>

          <span className="text-neutral-500">
            {message}
          </span>
        </div>

{notification.commentText && (
  <div className="mt-2 rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-300">
    &ldquo;
    {notification.commentText}
    &rdquo;
  </div>
)}
        <p className="mt-2 text-xs text-neutral-500">
          {time}
        </p>
      </div>

      {!notification.read && (
        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
      )}
    </Link>
  );
}