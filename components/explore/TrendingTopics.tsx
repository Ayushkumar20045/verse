const topics = [
  "#NextJS",
  "#React",
  "#TypeScript",
  "#OpenSource",
  "#TailwindCSS",
];

export default function TrendingTopics() {
  return (
    <section className="px-6 pb-6">
      <h2 className="mb-4 text-lg font-semibold">
        Trending Topics
      </h2>

      <div className="flex flex-wrap gap-3">
        {topics.map((topic) => (
          <button
            key={topic}
            className="rounded-full border border-neutral-800 px-4 py-2 text-sm transition-colors hover:border-neutral-600 hover:bg-neutral-900"
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
}