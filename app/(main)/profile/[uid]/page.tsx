"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useParams } from "next/navigation";

import Avatar from "@/components/ui/Avatar";
import FeedList from "@/components/feed/FeedList";

import { usePosts } from "@/context/PostsContext";
import { useUser } from "@/context/UserContext";

import { FirestoreUser } from "@/types/firebase";

import { getUser } from "@/lib/services/users";

import {
  followUser,
  unfollowUser,
} from "@/lib/services/follow";

export default function UserProfilePage() {
  const { uid } = useParams<{
    uid: string;
  }>();

  const {
    profile: currentUser,
    refreshProfile,
  } = useUser();

  const {
    posts,
    likePost,
    bookmarkPost,
    deletePost,
    editPost,
  } = usePosts();

  const [profile, setProfile] =
    useState<FirestoreUser | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  const [isUpdating, setIsUpdating] =
    useState(false);

  useEffect(() => {
    async function loadUser() {
      if (!uid) {
        return;
      }

      setLoading(true);

      const user =
        await getUser(uid);

      setProfile(user);

      setLoading(false);
    }

    loadUser();
  }, [uid]);

  const isOwnProfile =
    currentUser?.uid === profile?.uid;

  const isFollowing =
    profile &&
    currentUser
      ? currentUser.following.includes(
          profile.uid
        )
      : false;

  const userPosts = useMemo(() => {
    if (!profile) {
      return [];
    }

    return posts.filter(
      (post) =>
        post.userId === profile.uid
    );
  }, [posts, profile]);

  const joinedDate = profile?.joinedAt
    ? profile.joinedAt.toDate().toLocaleDateString(
        "en-US",
        {
          month: "long",
          year: "numeric",
        }
      )
    : "Recently";

  async function handleFollowToggle() {
    if (
      !currentUser ||
      !profile ||
      isOwnProfile
    ) {
      return;
    }

    try {
      setIsUpdating(true);

      if (isFollowing) {
        await unfollowUser(
          currentUser.uid,
          profile.uid
        );
      } else {
        await followUser(
          currentUser.uid,
          profile.uid
        );
      }

      await refreshProfile();

      const updatedProfile =
        await getUser(profile.uid);

      setProfile(updatedProfile);
    } finally {
      setIsUpdating(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">
          Loading profile...
        </p>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">
          User not found.
        </p>
      </main>
    );
  }
    return (
    <main className="min-h-screen">
      {/* Cover */}
      <div className="h-44 rounded-b-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />

      <div className="px-8 pb-8">
        {/* Avatar */}
        <div className="-mt-16">
          <div className="rounded-full border-4 border-black">
            <Avatar
              name={profile.displayName}
              photoURL={profile.photoURL}
              size="xl"
            />
          </div>
        </div>

        {/* Header */}
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">
              {profile.displayName}
            </h1>

            <p className="text-neutral-500">
              @{profile.username}
            </p>

            {profile.bio && (
              <p className="mt-4 max-w-2xl text-neutral-300">
                {profile.bio}
              </p>
            )}

            <p className="mt-4 text-sm text-neutral-500">
              Joined {joinedDate}
            </p>
          </div>

          {!isOwnProfile && (
            <button
              onClick={handleFollowToggle}
              disabled={isUpdating}
              className={`rounded-full px-6 py-2 font-semibold transition ${
                isFollowing
                  ? "border border-neutral-700 bg-neutral-900 hover:bg-neutral-800"
                  : "bg-white text-black hover:bg-neutral-200"
              }`}
            >
              {isUpdating
                ? "Updating..."
                : isFollowing
                ? "Following"
                : "Follow"}
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="mt-8 flex gap-10 border-y border-neutral-800 py-5">
          <div>
            <p className="text-2xl font-bold">
              {userPosts.length}
            </p>

            <p className="text-sm text-neutral-500">
              Posts
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              {profile.followers.length}
            </p>

            <p className="text-sm text-neutral-500">
              Followers
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              {profile.following.length}
            </p>

            <p className="text-sm text-neutral-500">
              Following
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="mt-8">
          <h2 className="mb-6 text-xl font-semibold">
            Posts
          </h2>

          {userPosts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-neutral-800 p-10 text-center">
              <p className="text-neutral-500">
                This user has not posted anything yet.
              </p>
            </div>
          ) : (
            <FeedList
              posts={userPosts}
              onLike={likePost}
              onBookmark={bookmarkPost}
              onDelete={deletePost}
              onEdit={editPost}
            />
          )}
        </div>
      </div>
    </main>
  );
}