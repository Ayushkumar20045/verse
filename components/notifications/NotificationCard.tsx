import {
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

type NotificationType =
  | "like"
  | "comment"
  | "bookmark";

type NotificationCardProps = {
  type: NotificationType;
  user: string;
  message: string;
  time: string;
};

export default function NotificationCard({
  type,
  user,
  message,
  time,
}: NotificationCardProps) {
  const icon =
    type === "like" ? (
      <Heart
        size={18}
        className="text-red-500"
      />
    ) : type === "comment" ? (
      <MessageCircle
        size={18}
        className="text-blue-500"
      />
    ) : (
      <Bookmark
        size={18}
        className="text-yellow-500"
      />
    );

  return (
    <div className="flex items-start gap-4 rounded-xl border border-neutral-800 p-5 transition-colors hover:border-neutral-700">
      <div className="mt-1">{icon}</div>

      <div className="flex-1">
        <p>
          <span className="font-semibold">
            {user}
          </span>{" "}
          {message}
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          {time}
        </p>
      </div>
    </div>
  );
}