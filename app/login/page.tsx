"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome to Verse
        </h1>

        <p className="mb-8 text-neutral-400">
          Sign in to continue.
        </p>

        <button
          onClick={login}
          disabled={loading}
          className="w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-neutral-200 disabled:opacity-50"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}