"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";

import Button from "@/components/ui/Button";
import { navigation } from "@/lib/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen flex-col px-10 py-10">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Verse
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 border-l-2 py-3 pl-4 transition-all duration-200 ${
                    isActive
                      ? "border-white font-semibold text-white"
                      : "border-transparent text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Create Post */}
      <div className="mt-10 border-t border-neutral-800 pt-8">
        <Button
          variant="primary"
          className="flex w-full items-center justify-center gap-2"
        >
          <Plus size={18} />
          <span>Create Post</span>
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-neutral-800 pt-4">
        <p className="text-xs text-neutral-500">
          Verse v0.2
        </p>
      </div>
    </aside>
  );
}