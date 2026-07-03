import PostComposer from "@/components/feed/PostComposer";
import PostCard from "@/components/feed/PostCard";
import { posts } from "@/lib/posts";

export default function Feed() {
  return (
    <main className="min-h-screen p-6">
      <PostComposer />

      <section className="mt-6 space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            author={post.author}
            username={post.username}
            time={post.time}
            content={post.content}
          />
        ))}
      </section>
    </main>
  );
}