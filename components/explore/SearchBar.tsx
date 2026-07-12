"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-6 py-5">
      <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 transition-colors focus-within:border-neutral-600">
        <Search
          size={18}
          className="text-neutral-500"
        />

        <input
          type="text"
          placeholder="Search posts..."
          className="w-full bg-transparent outline-none placeholder:text-neutral-500"
        />
      </div>
    </div>
  );
}