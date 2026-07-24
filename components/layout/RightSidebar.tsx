import { trends } from "@/lib/trends";

export default function RightSidebar() {
  return (
    <aside className="min-h-screen p-6">
      <section>
        <h2 className="mb-6 text-xl font-bold">
          Ripples
        </h2>

        <div className="space-y-6">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="cursor-pointer transition-colors hover:text-neutral-300"
            >
              <h3 className="font-medium">
                {trend.topic}
              </h3>

              <p className="text-sm text-neutral-500">
                {trend.posts}
              </p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}