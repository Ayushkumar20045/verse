"use client";

import { useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

type PostComposerProps = {
  onPost: (content: string) => void;
};

export default function PostComposer({
  onPost,
}: PostComposerProps) {
  const [content, setContent] = useState("");

  const MAX_CHARACTERS = 280;

  const isOverLimit = content.length > MAX_CHARACTERS;

  function handlePost() {
    const trimmedContent = content.trim();

    if (!trimmedContent || isOverLimit) {
      return;
    }

    onPost(trimmedContent);
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
      handlePost();
    }
  }

  return (
    <section className="rounded-xl border border-neutral-800 p-5">
      <div className="flex items-start gap-4">
        <Avatar name="Ayush Kumar" />

        <div className="flex-1">
          <h2 className="mb-3 text-xl font-semibold">
            What&apos;s happening?
          </h2>

          <textarea
            rows={4}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Share something with the world..."
            className="w-full resize-none rounded-lg border border-neutral-800 bg-transparent p-4 outline-none transition-colors focus:border-neutral-600"
          />

          <div className="mt-3 flex items-center justify-between">
            <span
              className={`text-sm ${
                isOverLimit
                  ? "text-red-500"
                  : "text-neutral-500"
              }`}
            >
              {content.length}/{MAX_CHARACTERS}
            </span>

            <Button
              variant="primary"
              onClick={handlePost}
              disabled={!content.trim() || isOverLimit}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}