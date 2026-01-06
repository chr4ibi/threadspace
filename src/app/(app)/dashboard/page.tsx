import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

// This page is DYNAMIC - renders on every request
// Protected by middleware, but double-check for security
export default async function DashboardPage() {
  const session = await auth();

  // Redirect if not authenticated (shouldn't happen with middleware)
  if (!session?.user) {
    redirect("/login");
  }

  const requestTime = new Date().toISOString();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Dashboard
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Welcome back, {session.user.username}!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* User Info Card */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Profile Information
          </h2>
          <dl className="mt-4 space-y-2">
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Username
              </dt>
              <dd className="text-sm text-zinc-900 dark:text-zinc-100">
                {session.user.username}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Email
              </dt>
              <dd className="text-sm text-zinc-900 dark:text-zinc-100">
                {session.user.email}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Name
              </dt>
              <dd className="text-sm text-zinc-900 dark:text-zinc-100">
                {session.user.name || "Not set"}
              </dd>
            </div>
          </dl>
          <div className="mt-4">
            <Link
              href="/profile"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View Full Profile →
            </Link>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Quick Actions
          </h2>
          <div className="mt-4 space-y-3">
            <Link
              href="/feed"
              className="block rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              View Feed
            </Link>
            <Link
              href="/c/nextjs"
              className="block rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              Browse Communities
            </Link>
          </div>
        </div>

        {/* Stats Card */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Activity
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Posts</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                0
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Comments
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                0
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Communities
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SSR Demo Section */}
      <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Server-Side Rendering (SSR)
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          This page was rendered on the server at:{" "}
          <strong className="text-zinc-900 dark:text-zinc-100">
            {requestTime}
          </strong>
        </p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Refresh the page - the timestamp updates every time! This dashboard
          uses SSR for personalized, up-to-date content.
        </p>
      </div>

      {/* Session Debug Info (Development Only) */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Session Data (Dev Only)
          </h2>
          <pre className="mt-4 overflow-auto rounded bg-zinc-900 p-4 text-xs text-zinc-100">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
