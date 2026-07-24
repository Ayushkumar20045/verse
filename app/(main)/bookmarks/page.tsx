"use client";

import { Bookmark } from "lucide-react";

import FeedList from "@/components/feed/FeedList";

import { usePosts } from "@/context/PostsContext";

export default function BookmarksPage() {
  const {
    posts,
    likePost,
    bookmarkPost,
    deletePost,
    editPost,
  } = usePosts();

  const bookmarkedPosts = posts.filter(
    (post) => post.isBookmarked
  );

  return (
    <main className="min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Bookmarks
        </h1>

        <p className="mt-2 text-neutral-500">
          Your saved posts.
        </p>
      </div>

      {bookmarkedPosts.length === 0 ? (
        <div className="flex h-[60vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
            <Bookmark
              size={36}
              className="text-neutral-400"
            />
          </div>

          <h2 className="text-2xl font-semibold">
            No bookmarks yet
          </h2>

          <p className="mt-3 max-w-md text-neutral-500">
            Save posts you want to revisit later.
            Your bookmarked posts will appear
            here for quick access.
          </p>
        </div>
      ) : (
        <FeedList
          posts={bookmarkedPosts}
          onLike={likePost}
          onBookmark={bookmarkPost}
          onDelete={deletePost}
          onEdit={editPost}
        />
      )}
    </main>
  );
}