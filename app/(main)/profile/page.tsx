"use client";

import FeedList from "@/components/feed/FeedList";

import { usePosts } from "@/context/PostsContext";
import { useUser } from "@/context/UserContext";

export default function ProfilePage() {
  const {
    posts,
    likePost,
    bookmarkPost,
    deletePost,
    editPost,
  } = usePosts();

  const {
    displayName,
    username,
  } = useUser();

  const userPosts = posts.filter(
    (post) => post.userId === "user-1"
  );

  return (
    <main className="min-h-screen">
      {/* Cover Banner */}
      <div className="h-44 rounded-b-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />

      {/* Profile */}
      <div className="px-8 pb-8">
        {/* Avatar */}
        <div className="-mt-16">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-black bg-neutral-700 text-4xl font-bold">
            {displayName.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* User Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold">
            {displayName}
          </h1>

          <p className="text-neutral-500">
            {username}
          </p>

          <p className="mt-4 text-neutral-300">
            Frontend Developer • CSE @ GBU
          </p>

          <p className="mt-2 text-neutral-400">
            Building Verse.
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            Joined July 2026
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 flex gap-10 border-y border-neutral-800 py-5">
          <div>
            <p className="text-2xl font-bold">
              {userPosts.length}
            </p>

            <p className="text-sm text-neutral-500">
              Posts
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              248
            </p>

            <p className="text-sm text-neutral-500">
              Followers
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              180
            </p>

            <p className="text-sm text-neutral-500">
              Following
            </p>
          </div>
        </div>

        {/* User Posts */}
        <div className="mt-8">
          <h2 className="mb-6 text-xl font-semibold">
            Posts
          </h2>

          {userPosts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-neutral-800 p-10 text-center">
              <p className="text-neutral-500">
                Create your first post to see it
                here.
              </p>
            </div>
          ) : (
            <FeedList
              posts={userPosts}
              onLike={likePost}
              onBookmark={bookmarkPost}
              onDelete={deletePost}
              onEdit={editPost}
            />
          )}
        </div>
      </div>
    </main>
  );
}