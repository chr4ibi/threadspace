import Link from "next/link";
import { VoteButtons } from "@/components/vote-buttons";

// Nested dynamic routes - both slug and postId are available
// For /c/nextjs/abc123: params.slug = "nextjs", params.postId = "abc123"
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; postId: string }>;
}) {
  const { slug, postId } = await params;

  return (
    <div>
      {/* Breadcrumb navigation */}
      <nav className="mb-4 text-sm">
        <Link
          href={`/c/${slug}`}
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          c/{slug}
        </Link>
        <span className="mx-2 text-zinc-400">/</span>
        <span className="text-zinc-900 dark:text-zinc-100">Post</span>
      </nav>

      {/* Post Content */}
      <article className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Example Post Title
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Posted by u/user123 in c/{slug} • Post ID: {postId}
        </p>

        <div className="mt-4 text-zinc-700 dark:text-zinc-300">
          <p>
            This is the post content. In a real app, we&apos;d fetch this from a
            database using the postId parameter.
          </p>
        </div>

        {/* Interactive vote buttons - Client Component */}
        <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <VoteButtons initialVotes={42} />
        </div>
      </article>

      {/* Comments Section Placeholder */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Comments
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Comments will be loaded here (coming in a later module)
        </p>
      </section>
    </div>
  );
}
