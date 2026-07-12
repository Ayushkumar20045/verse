import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 1,
    type: "like" as const,
    user: "Arjun Mehta",
    message: "liked your post.",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "comment" as const,
    user: "Sophia Lee",
    message: "commented on your post.",
    time: "15 min ago",
  },
  {
    id: 3,
    type: "bookmark" as const,
    user: "Emma Wilson",
    message: "bookmarked your post.",
    time: "1 hour ago",
  },
];

export default function NotificationList() {
  return (
    <div className="space-y-4">
      {notifications.map(
        (notification) => (
          <NotificationCard
            key={notification.id}
            type={notification.type}
            user={notification.user}
            message={notification.message}
            time={notification.time}
          />
        )
      )}
    </div>
  );
}