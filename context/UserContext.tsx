"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "@/context/AuthContext";

import { getUser } from "@/lib/services/users";

import {
  FirestoreUser,
} from "@/types/firebase";

type UserContextType = {
  profile: FirestoreUser | null;

  loading: boolean;

  refreshProfile: () => Promise<void>;
};

const UserContext =
  createContext<UserContextType | null>(
    null
  );

export function UserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useAuth();

  const [profile, setProfile] =
    useState<FirestoreUser | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadProfile() {
      if (!user) {
        if (mounted) {
          setProfile(null);
          setLoading(false);
        }

        return;
      }

      if (mounted) {
        setLoading(true);
      }

      const firestoreUser =
        await getUser(user.uid);

      if (mounted) {
        setProfile(
          firestoreUser
        );

        setLoading(false);
      }
    }

    loadProfile();

    return () => {
      mounted = false;
    };
  }, [user]);

  async function refreshProfile() {
    if (!user) {
      return;
    }

    const firestoreUser =
      await getUser(user.uid);

    setProfile(
      firestoreUser
    );
  }

  return (
    <UserContext.Provider
      value={{
        profile,
        loading,
        refreshProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context =
    useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser must be used inside UserProvider."
    );
  }

  return context;
}