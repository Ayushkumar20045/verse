"use client";

import { useState } from "react";

import ConfirmModal from "@/components/ui/ConfirmModal";

export default function DangerZone() {
  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  return (
    <>
      <div className="rounded-xl border border-red-900 bg-red-950/20 p-6">
        <h2 className="text-xl font-semibold text-red-500">
          Danger Zone
        </h2>

        <p className="mt-2 text-sm text-neutral-400">
          These actions are permanent and cannot
          be undone.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="rounded-lg border border-neutral-700 px-5 py-2 transition-colors hover:bg-neutral-900">
            Logout
          </button>

          <button
            onClick={() =>
              setIsDeleteOpen(true)
            }
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition-colors hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Delete Account"
        description="This action cannot be undone. Your account and all associated data will be permanently deleted."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() =>
          setIsDeleteOpen(false)
        }
        onCancel={() =>
          setIsDeleteOpen(false)
        }
      />
    </>
  );
}