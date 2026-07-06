import { Heart, MessageCircle, Repeat2 } from "lucide-react";

import Avatar from "@/components/ui/Avatar";

type PostCardProps = {
  author: string;
  username: string;
  time: string;
  content: string;

  likes: number;
  comments: number;
  shares: number;

  isLiked: boolean;

  onLike: () => void;
};

export default function PostCard({
  author,
  username,
  time,
  content,
  likes,
  comments,
  shares,
  isLiked,
  onLike,
}: PostCardProps) {
  return (
    <article className="rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
      <div className="flex items-start gap-4">
        <Avatar name={author} />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{author}</h3>

            <span className="text-sm text-neutral-500">
              {username}
            </span>

            <span className="text-sm text-neutral-500">
              •
            </span>

            <span className="text-sm text-neutral-500">
              {time}
            </span>
          </div>

          <p className="mt-3 leading-7">
            {content}
          </p>

          <div className="mt-6 flex items-center gap-8 text-sm">
            <button
              onClick={onLike}
              className={`flex items-center gap-2 transition-colors ${
                isLiked
                  ? "text-red-500"
                  : "text-neutral-500 hover:text-red-500"
              }`}
            >
              <Heart
                size={18}
                fill={isLiked ? "currentColor" : "none"}
              />
              <span>{likes}</span>
            </button>

            <button className="flex items-center gap-2 text-neutral-500">
              <MessageCircle size={18} />
              <span>{comments}</span>
            </button>

            <button className="flex items-center gap-2 text-neutral-500">
              <Repeat2 size={18} />
              <span>{shares}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}