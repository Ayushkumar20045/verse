import {
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";

type PostActionsProps = {
  likes: number;
  comments: number;
  shares: number;

  isLiked: boolean;

  onLike: () => void;
  onToggleComments: () => void;
};

export default function PostActions({
  likes,
  comments,
  shares,

  isLiked,

  onLike,
  onToggleComments,
}: PostActionsProps) {
  return (
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

      <button
        onClick={onToggleComments}
        className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-blue-500"
      >
        <MessageCircle size={18} />

        <span>{comments}</span>
      </button>

      <button className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-green-500">
        <Repeat2 size={18} />

        <span>{shares}</span>
      </button>
    </div>
  );
}