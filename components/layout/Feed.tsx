"use client";

import PostComposer from "@/components/feed/PostComposer";
import FeedList from "@/components/feed/FeedList";

import { usePosts } from "@/context/PostsContext";

export default function Feed() {
  const {
    posts,
    createPost,
    likePost,
    bookmarkPost,
    deletePost,
    editPost,
  } = usePosts();

  return (
    <main className="min-h-screen p-6">
      <PostComposer
        onPost={createPost}
      />

      <FeedList
        posts={posts}
        onLike={likePost}
        onBookmark={bookmarkPost}
        onDelete={deletePost}
        onEdit={editPost}
      />
    </main>
  );
}