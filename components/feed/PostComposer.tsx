import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

export default function PostComposer() {
  return (
    <section className="rounded-xl border border-neutral-800 p-5">
      <div className="flex items-start gap-4">
        <Avatar name="Ayush Kumar" />

        <div className="flex-1">
<h2 className="mb-3 text-xl font-semibold">
  What&apos;s happening?
</h2>

          <textarea
            rows={4}
            placeholder="Share something with the world..."
            className="w-full resize-none rounded-lg border border-neutral-800 bg-transparent p-4 outline-none transition-colors focus:border-neutral-600"
          />

          <div className="mt-3 flex justify-end">
            <Button variant="primary">
              Post
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}