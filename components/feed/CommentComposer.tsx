"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";

type CommentComposerProps = {
  onComment: (content: string) => void;
};

export default function CommentComposer({
  onComment,
}: CommentComposerProps) {
  const [content, setContent] = useState("");

  function handleComment() {
    const trimmedContent = content.trim();

    if (!trimmedContent) {
      return;
    }

    onComment(trimmedContent);
    setContent("");
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (
      event.key === "Enter" &&
      (event.ctrlKey || event.metaKey)
    ) {
      event.preventDefault();
      handleComment();
    }
  }

  return (
    <section className="mt-5 rounded-xl border border-neutral-800 p-4">
      <textarea
        rows={3}
        value={content}
        onChange={(event) =>
          setContent(event.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Write a comment..."
        className="w-full resize-none rounded-lg border border-neutral-800 bg-transparent p-3 outline-none transition-colors focus:border-neutral-600"
      />

      <div className="mt-3 flex justify-end">
        <Button
          variant="primary"
          onClick={handleComment}
          disabled={!content.trim()}
        >
          Comment
        </Button>
      </div>
    </section>
  );
}