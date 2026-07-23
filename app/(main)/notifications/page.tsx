"use client";

import {
  useEffect,
  useState,
} from "react";

import NotificationCard from "@/components/notifications/NotificationCard";

import { useUser } from "@/context/UserContext";

import {
  markAllNotificationsAsRead,
  subscribeToNotifications,
} from "@/lib/services/notifications";

import { Notification } from "@/types/notification";

export default function NotificationsPage() {
  const { profile } = useUser();

  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  useEffect(() => {
    if (!profile) {
      return;
    }

    const unsubscribe =
      subscribeToNotifications(
        profile.uid,
        (
          notificationList
        ) => {
          setNotifications(
            notificationList
          );
        }
      );

    return unsubscribe;
  }, [profile]);

  useEffect(() => {
    if (
      notifications.length === 0
    ) {
      return;
    }

    markAllNotificationsAsRead(
      notifications
    );
  }, [notifications]);

  return (
    <main className="min-h-screen">
      <div className="border-b border-neutral-800 px-6 py-5">
        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <p className="mt-2 text-neutral-500">
          Stay updated with
          everything happening
          in Verse.
        </p>
      </div>

      {notifications.length ===
      0 ? (
        <div className="flex h-[60vh] items-center justify-center text-neutral-500">
          No notifications yet.
        </div>
      ) : (
        <div>
          {notifications.map(
            (
              notification
            ) => (
              <NotificationCard
                key={
                  notification.id
                }
                notification={
                  notification
                }
              />
            )
          )}
        </div>
      )}
    </main>
  );
}