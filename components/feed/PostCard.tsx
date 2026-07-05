import {
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";

type PostCardProps = {
  author: string;
  username: string;
  time: string;
  content: string;
};

export default function PostCard({
  author,
  username,
  time,
  content,
}: PostCardProps) {
  return (
    <article className="rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-700">
      <div className="flex items-start gap-4">
        <Avatar name={author} />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">
              {author}
            </h3>

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

          <div className="mt-6 flex items-center gap-8 text-sm text-neutral-500">
            <button className="flex items-center gap-2 transition-colors hover:text-red-500">
              <Heart size={18} />
              <span>Like</span>
            </button>

            <button className="flex items-center gap-2 transition-colors hover:text-blue-500">
              <MessageCircle size={18} />
              <span>Comment</span>
            </button>

            <button className="flex items-center gap-2 transition-colors hover:text-green-500">
              <Repeat2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}