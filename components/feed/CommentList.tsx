import CommentCard from "@/components/feed/CommentCard";
import { Comment } from "@/types/comment";

type CommentListProps = {
  comments: Comment[];
  onEdit: (commentId: number, content: string) => void;
  onDelete: (commentId: number) => void;
};

export default function CommentList({
  comments,
  onEdit,
  onDelete,
}: CommentListProps) {
  return (
    <section className="mt-4 space-y-4">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          onEdit={(content) =>
            onEdit(comment.id, content)
          }
          onDelete={() => onDelete(comment.id)}
        />
      ))}
    </section>
  );
}