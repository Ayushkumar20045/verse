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
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="block rounded-lg px-4 py-2 text-base font-medium transition-colors hover:bg-neutral-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Add it here */}
      <div className="mt-8 border-t border-neutral-800 pt-6">
        <Button variant="primary">
          Create Post
        </Button>
      </div>
    </aside>
  );
}