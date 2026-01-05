import Link from "next/link";
import { Button } from "@/components/ui/button";

// This page is STATIC by default
// Generated at build time, never changes until next deployment
export default function AboutPage() {
  const buildTime = new Date().toISOString();

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        About ThreadSpace
      </h1>

      <div className="mt-8 space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          ThreadSpace is a modern community discussion platform built with
          Next.js 14+, demonstrating best practices for full-stack development.
        </p>

        <p>
          This page was pre-rendered at build time:{" "}
          <strong className="text-zinc-900 dark:text-zinc-100">
            {buildTime}
          </strong>
        </p>

        <p className="text-sm">
          Notice: Refresh this page multiple times. The timestamp stays the
          same! That&apos;s because this page is{" "}
          <strong>statically generated</strong>
          at build time.
        </p>
      </div>

      <div className="mt-8">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

// This is SSG - no special config needed
// export const dynamic = 'force-static' // ← Explicit (but default anyway)
