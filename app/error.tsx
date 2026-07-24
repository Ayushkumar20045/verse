"use client";

import { useEffect } from "react";

import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-neutral-400">
          An unexpected error occurred while loading this page.
        </p>

        <div className="mt-8">
          <Button
            variant="primary"
            onClick={reset}
          >
            Try Again
          </Button>
        </div>
      </div>
    </main>
  );
}