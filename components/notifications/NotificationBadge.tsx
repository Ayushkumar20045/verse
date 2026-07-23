"use client";

import { useEffect, useState } from "react";

import { Bell } from "lucide-react";

import { useUser } from "@/context/UserContext";

import { subscribeToNotifications } from "@/lib/services/notifications";

export default function NotificationBadge() {
  const { profile } = useUser();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!profile) {
      return;
    }

    const unsubscribe =
      subscribeToNotifications(
        profile.uid,
        (notifications) => {
          const unread =
            notifications.filter(
              (notification) =>
                !notification.read
            ).length;

          setCount(unread);
        }
      );

    return unsubscribe;
  }, [profile]);

  return (
    <div className="relative">
      <Bell size={20} />

      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
          {count > 99
            ? "99+"
            : count}
        </span>
      )}
    </div>
  );
}