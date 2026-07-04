import Link from "next/link";
import Button from "@/components/ui/Button";
import { navigation } from "@/lib/navigation";

export default function Sidebar() {
  return (
    <aside className="min-h-screen border-r p-6">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight">
        V
      </h1>

      <nav className="mt-6">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="flex items-center gap-5 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-neutral-900"
                >
                  <Icon size={22} />

                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-8 border-t border-neutral-800 pt-6">
        <Button variant="primary" className="w-full">
          Create Post
        </Button>
      </div>
    </aside>
  );
}