"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { createUser } from "@/lib/services/users";

const provider = new GoogleAuthProvider();

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        }
      );

    return unsubscribe;
  }, []);

  async function login() {
    const result =
      await signInWithPopup(
        auth,
        provider
      );

    await createUser({
      uid: result.user.uid,

      displayName:
        result.user.displayName ??
        "Anonymous",

      username:
        result.user.email
          ?.split("@")[0]
          .toLowerCase() ??
        `user_${result.user.uid.slice(0, 6)}`,

      email:
        result.user.email ?? "",

      photoURL:
        result.user.photoURL ?? "",

      bio: "",

      followers: [],

      following: [],

      isPrivate: false,
    });
  }

  async function logout() {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider."
    );
  }

  return context;
}