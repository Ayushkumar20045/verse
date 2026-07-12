"use client";

import FeedList from "@/components/feed/FeedList";

import ExploreHeader from "@/components/explore/ExploreHeader";
import SearchBar from "@/components/explore/SearchBar";
import TrendingTopics from "@/components/explore/TrendingTopics";

import { usePosts } from "@/context/PostsContext";

export default function ExplorePage() {
  const {
    posts,
    likePost,
    bookmarkPost,
    deletePost,
    editPost,
  } = usePosts();

  return (
    <main className="min-h-screen">
      <ExploreHeader />

      <SearchBar />

      <TrendingTopics />

      <div className="border-t border-neutral-800 px-6 py-6">
        <h2 className="mb-6 text-xl font-semibold">
          Discover Posts
        </h2>

        <FeedList
          posts={posts}
          onLike={likePost}
          onBookmark={bookmarkPost}
          onDelete={deletePost}
          onEdit={editPost}
        />
      </div>
    </main>
  );
}