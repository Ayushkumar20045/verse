"use client";

import Link from "next/link";

import Feed from "@/components/layout/Feed";
import Button from "@/components/ui/Button";

import { useAuth } from "@/context/AuthContext";

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to Verse
          </h1>

          <p className="mt-6 text-lg text-neutral-400">
            Share your thoughts, connect with others, and discover meaningful
            conversations.
          </p>

          <div className="mt-10">
            <Link href="/login">
              <Button variant="primary">
                Sign in with Google
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <Feed />;
}