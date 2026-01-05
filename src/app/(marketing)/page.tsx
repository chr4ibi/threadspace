import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
          ThreadSpace
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Where communities come together. Join discussions, share ideas, and
          connect with people who share your interests.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/feed">Browse Communities</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/c/nextjs">Explore r/nextjs</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Communities
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Create and join communities around any topic
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Discussions
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Engage in threaded conversations
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Voting
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Surface the best content through community votes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
