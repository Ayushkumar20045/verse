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
    <article className="rounded-xl border p-6">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">{author}</h3>

        <span className="text-sm text-gray-500">
          {username}
        </span>

        <span className="text-sm text-gray-500">
          • {time}
        </span>
      </div>

      <p className="mt-4">{content}</p>

      <div className="mt-6 flex gap-6 text-sm">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </article>
  );
}