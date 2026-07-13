"use client";

import { useState } from "react";

import { useUser } from "@/context/UserContext";

import DangerZone from "@/components/settings/DangerZone";
import SettingsInput from "@/components/settings/SettingsInput";
import SettingsSection from "@/components/settings/SettingsSection";
import SettingsToggle from "@/components/settings/SettingsToggle";

export default function SettingsPage() {
  const {
    displayName,
    username,
    email,

    darkMode,
    compactLayout,

    pushNotifications,
    emailNotifications,

    privateAccount,
    activityStatus,

    updateDisplayName,
    updateUsername,

    toggleDarkMode,
    toggleCompactLayout,

    togglePushNotifications,
    toggleEmailNotifications,

    togglePrivateAccount,
    toggleActivityStatus,
  } = useUser();

  const [hasChanges, setHasChanges] =
    useState(false);

  const [isSaving, setIsSaving] =
    useState(false);

  const [saveMessage, setSaveMessage] =
    useState("");

  function markAsChanged() {
    setHasChanges(true);
  }

  async function handleSave() {
    setIsSaving(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsSaving(false);
    setHasChanges(false);

    setSaveMessage(
      "Settings saved successfully."
    );

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  }

  return (
    <main className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-neutral-500">
          Manage your account preferences and
          application settings.
        </p>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 p-5">
        <div>
          <h2 className="font-semibold">
            Save Your Changes
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Your changes will not be applied until
            you save them.
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
            : "Save Changes"}
        </button>
      </div>

      {saveMessage && (
        <div className="rounded-lg border border-green-700 bg-green-950/20 px-4 py-3 text-green-400">
          {saveMessage}
        </div>
      )}

      <SettingsSection
        title="Account"
        description="Update your basic profile information."
      >
        <SettingsInput
          label="Display Name"
          value={displayName}
          onChange={(event) => {
            updateDisplayName(
              event.target.value
            );
            markAsChanged();
          }}
        />

        <SettingsInput
          label="Username"
          value={username}
          onChange={(event) => {
            updateUsername(
              event.target.value
            );
            markAsChanged();
          }}
        />

        <SettingsInput
          label="Email"
          value={email}
          onChange={() => {}}
          disabled
        />
      </SettingsSection>

      <SettingsSection
        title="Appearance"
        description="Customize how Verse looks."
      >
        <SettingsToggle
          label="Dark Mode"
          description="Enable dark theme."
          enabled={darkMode}
          onToggle={() => {
            toggleDarkMode();
            markAsChanged();
          }}
        />

        <SettingsToggle
          label="Compact Layout"
          description="Reduce spacing across the interface."
          enabled={compactLayout}
          onToggle={() => {
            toggleCompactLayout();
            markAsChanged();
          }}
        />
      </SettingsSection>

      <SettingsSection
        title="Notifications"
        description="Choose what notifications you receive."
      >
        <SettingsToggle
          label="Push Notifications"
          enabled={pushNotifications}
          onToggle={() => {
            togglePushNotifications();
            markAsChanged();
          }}
        />

        <SettingsToggle
          label="Email Notifications"
          enabled={emailNotifications}
          onToggle={() => {
            toggleEmailNotifications();
            markAsChanged();
          }}
        />
      </SettingsSection>

      <SettingsSection
        title="Privacy"
        description="Control your privacy preferences."
      >
        <SettingsToggle
          label="Private Account"
          enabled={privateAccount}
          onToggle={() => {
            togglePrivateAccount();
            markAsChanged();
          }}
        />

        <SettingsToggle
          label="Show Activity Status"
          enabled={activityStatus}
          onToggle={() => {
            toggleActivityStatus();
            markAsChanged();
          }}
        />
      </SettingsSection>

      <DangerZone />
    </main>
  );
}