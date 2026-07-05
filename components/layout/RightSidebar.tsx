import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

import { trends } from "@/lib/trends";
import { users } from "@/lib/users";

export default function RightSidebar() {
  return (
    <aside className="min-h-screen p-6">
      {/* Ripples */}
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

      {/* Constellations */}
      <section className="mt-14">
        <h2 className="mb-6 text-xl font-bold">
          Constellations
        </h2>

        <div className="space-y-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Avatar name={user.name} />

                <div>
                  <h3 className="font-medium leading-none">
                    {user.name}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    {user.username}
                  </p>
                </div>
              </div>

              <Button
                variant="secondary"
                size="sm"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}