import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // Fetch full user data from database
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      username: true,
      name: true,
      image: true,
      bio: true,
      createdAt: true,
      emailVerified: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Profile
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Manage your account information
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Picture Section */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-3xl font-bold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
              {user.username[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {user.username}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Member since {user.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Account Information
          </h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Username
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                {user.username}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Email
              </dt>
              <dd className="mt-1 flex items-center gap-2 text-sm text-zinc-900 dark:text-zinc-100">
                {user.email}
                {user.emailVerified ? (
                  <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    Verified
                  </span>
                ) : (
                  <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Not verified
                  </span>
                )}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Full Name
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                {user.name || "Not set"}
              </dd>
            </div>
            {user.bio && (
              <div>
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Bio
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  {user.bio}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Back to Dashboard
          </Link>
          <button
            disabled
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-50"
            title="Edit functionality coming soon"
          >
            Edit Profile (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
