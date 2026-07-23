"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Search } from "lucide-react";

import Avatar from "@/components/ui/Avatar";

import {
  subscribeToUsers,
} from "@/lib/services/users";

import {
  FirestoreUser,
} from "@/types/firebase";

export default function SearchBar() {
  const [query, setQuery] =
    useState("");

  const [users, setUsers] =
    useState<FirestoreUser[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      subscribeToUsers((allUsers) => {
        setUsers(allUsers);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const filteredUsers =
    useMemo(() => {
      const search =
        query.trim().toLowerCase();

      if (!search) {
        return [];
      }

      return users.filter((user) => {
        return (
          user.displayName
            .toLowerCase()
            .includes(search) ||
          user.username
            .toLowerCase()
            .includes(search)
        );
      });
    }, [query, users]);

  const hasResults =
    filteredUsers.length > 0;

  const showDropdown =
    query.trim().length > 0;

  return (    <div className="relative px-6 py-5">
      <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 transition-colors focus-within:border-neutral-600">
        <Search
          size={18}
          className="text-neutral-500"
        />

        <input
          type="text"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search people..."
          className="w-full bg-transparent outline-none placeholder:text-neutral-500"
        />
      </div>

      {showDropdown && (
        <div className="absolute left-6 right-6 top-[92px] z-50 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl">
          {loading ? (
            <div className="p-5 text-center text-neutral-500">
              Loading users...
            </div>
          ) : hasResults ? (
            filteredUsers.map((user) => (
              <Link
                key={user.uid}
                href={`/profile/${user.uid}`}
                onClick={() =>
                  setQuery("")
                }
                className="flex items-center gap-4 border-b border-neutral-800 p-4 transition-colors last:border-none hover:bg-neutral-900"
              >
                <Avatar
                  name={user.displayName}
                  photoURL={
                    user.photoURL
                  }
                  size="md"
                />

                <div className="min-w-0">
                  <p className="truncate font-semibold">
                    {user.displayName}
                  </p>

                  <p className="truncate text-sm text-neutral-500">
                    @{user.username}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-5 text-center text-neutral-500">
              No users found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}