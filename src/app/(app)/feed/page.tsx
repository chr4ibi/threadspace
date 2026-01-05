export default function FeedPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Your Feed
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Posts from communities you&apos;ve joined will appear here.
      </p>

      {/* Placeholder for posts - we'll build this with real data later */}
      <div className="mt-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-2 h-3 w-1/2 rounded bg-zinc-100 dark:bg-zinc-800/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
