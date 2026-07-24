export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-700 border-t-white" />

        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Loading Verse...
          </h2>

          <p className="mt-2 text-neutral-400">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    </main>
  );
}