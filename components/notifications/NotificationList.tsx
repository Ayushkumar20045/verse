"use client";

import { Notification } from "@/types/notification";

import NotificationCard from "./NotificationCard";

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({
  notifications,
}: NotificationListProps) {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}