import Button from "@/components/ui/Button";

export default function PostComposer() {
  return (
    <section className="rounded-xl border p-6">
     <h2 className="text-lg font-semibold">
        What&apos;s happening?
</h2>
      <textarea
        placeholder="Share something with the world..."
        className="mt-4 h-32 w-full resize-none rounded-lg border p-3 outline-none"
      />

      <div className="mt-4 flex justify-end">
        <Button
          variant="primary"
          className="w-auto px-6"
        >
          Post
        </Button>
      </div>
    </section>
  );
}