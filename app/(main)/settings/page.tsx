"use client";

import { useState } from "react";

import { useUser } from "@/context/UserContext";
import { updateUser } from "@/lib/services/users";

import SettingsInput from "@/components/settings/SettingsInput";
import SettingsSection from "@/components/settings/SettingsSection";

type FormState = {
  displayName: string;
  username: string;
  bio: string;
};

export default function SettingsPage() {
  const { profile, loading, refreshProfile } = useUser();

  const [editedForm, setEditedForm] =
    useState<Partial<FormState>>({});

  const [hasChanges, setHasChanges] =
    useState(false);

  const [isSaving, setIsSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-neutral-400">
          Loading profile...
        </p>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-neutral-400">
          Profile not found.
        </p>
      </main>
    );
  }

  const user = profile;

  const form: FormState = {
    displayName:
      editedForm.displayName ??
      user.displayName,
    username:
      editedForm.username ??
      user.username,
    bio:
      editedForm.bio ??
      user.bio,
  };

  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setEditedForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setHasChanges(true);
    setMessage("");
  }

  async function handleSave() {
    try {
      setIsSaving(true);

      await updateUser(user.uid, {
        displayName: form.displayName,
        username: form.username,
        bio: form.bio,
      });

      await refreshProfile();

      setEditedForm({});
      setHasChanges(false);

      setMessage(
        "Profile updated successfully."
      );
    } catch {
      setMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Profile
        </h1>

        <p className="mt-2 text-neutral-500">
          Update your public profile information.
        </p>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 p-5">
        <div>
          <h2 className="font-semibold">
            Save Changes
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Changes will appear immediately after
            saving.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className={`rounded-lg px-5 py-2 font-medium transition-colors ${
            hasChanges
              ? "bg-white text-black hover:bg-neutral-200"
              : "cursor-not-allowed bg-neutral-800 text-neutral-500"
          }`}
        >
          {isSaving
            ? "Saving..."
            : "Save"}
        </button>
      </div>

      {message && (
        <div className="rounded-lg border border-green-700 bg-green-950/20 px-4 py-3 text-green-400">
          {message}
        </div>
      )}

      <SettingsSection
        title="Profile"
        description="Your public account information."
      >
        <SettingsInput
          label="Display Name"
          value={form.displayName}
          onChange={(event) =>
            updateField(
              "displayName",
              event.target.value
            )
          }
        />

        <SettingsInput
          label="Username"
          value={form.username}
          onChange={(event) =>
            updateField(
              "username",
              event.target.value
            )
          }
        />

        <SettingsInput
          label="Bio"
          type="textarea"
          rows={5}
          value={form.bio}
          placeholder="Tell people a little about yourself..."
          onChange={(event) =>
            updateField(
              "bio",
              event.target.value
            )
          }
        />

        <SettingsInput
          label="Email"
          value={user.email}
          disabled
          onChange={() => {}}
        />
      </SettingsSection>
    </main>
  );
}