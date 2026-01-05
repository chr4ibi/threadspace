import { cookies } from "next/headers";

// This page is DYNAMIC - renders on every request
// Using cookies() automatically makes it dynamic
export default async function DashboardPage() {
  const cookieStore = await cookies();
  const requestTime = new Date().toISOString();

  // Demo only - in production, validate and sanitize user data from cookies
  const userId = cookieStore.get("userId")?.value || "guest";

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Dashboard
      </h1>

      <div className="mt-6 space-y-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            User: {userId}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            This page was rendered on the server at:{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              {requestTime}
            </strong>
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Refresh the page - the timestamp updates every time! That&apos;s
            Server-Side Rendering (SSR).
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            Why SSR Here?
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>• Personalized content for each user</li>
            <li>• Data changes frequently</li>
            <li>• Needs access to cookies/headers</li>
            <li>• Real-time information required</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Explicit dynamic rendering (already automatic due to cookies())
// export const dynamic = 'force-dynamic';
