"use client";

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
        <div className="rounded-xl border border-dashed border-neutral-800 p-12 text-center">
          <h2 className="text-xl font-semibold">
            No bookmarked posts yet.
          </h2>

          <p className="mt-2 text-neutral-500">
            Bookmark posts from your feed to see them here.
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