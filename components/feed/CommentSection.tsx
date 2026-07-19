import CommentComposer from "@/components/feed/CommentComposer";
import CommentList from "@/components/feed/CommentList";

import { Comment } from "@/types/comment";

type CommentSectionProps = {
  isVisible: boolean;

  comments: Comment[];

  onComment: (content: string) => void;

onEditComment: (
  commentId: string,
  content: string
) => void;

onDeleteComment: (
  commentId: string
) => void;
};

export default function CommentSection({
  isVisible,

  comments,

  onComment,

  onEditComment,

  onDeleteComment,
}: CommentSectionProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="mt-6">
      <CommentComposer
        onComment={onComment}
      />

      <CommentList
        comments={comments}
        onEdit={onEditComment}
        onDelete={onDeleteComment}
      />
    </div>
  );
}