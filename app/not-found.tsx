import Link from "next/link";

import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold text-neutral-700">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Page not found
        </h1>

        <p className="mt-4 text-neutral-400">
          The page you are looking for is still under cooking buddy  <br></br>or it may have been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button variant="primary">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}