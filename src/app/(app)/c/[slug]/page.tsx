import Link from "next/link";
import { Button } from "@/components/ui/button";

// Simulate fetching community data from a database
async function getCommunityData(slug: string) {
  // In production: add try/catch for database errors
  // For now, simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const generatedAt = new Date().toISOString();

  // Show ISR cache behavior with slight variations
  // These numbers change on each regeneration to demonstrate ISR
  return {
    name: slug,
    description: `Welcome to the ${slug} community`,
    memberCount: 5247 + Math.floor(Math.random() * 10),
    postCount: 432 + Math.floor(Math.random() * 5),
    generatedAt,
  };
}

// The params prop contains the dynamic route segments
// For /c/nextjs, params.slug = "nextjs"
export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Server Component can directly await data - no useEffect needed!
  const community = await getCommunityData(slug);

  return (
    <div>
      {/* Community Header */}
      <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          c/{community.name}
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          {community.description}
        </p>
        <div className="mt-2 flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{community.memberCount.toLocaleString()} members</span>
          <span>•</span>
          <span>{community.postCount} posts</span>
        </div>
        <p className="mt-2 text-xs text-zinc-400">
          Data cached at: {community.generatedAt}
        </p>
        <Button className="mt-4" size="sm">
          Join Community
        </Button>
      </div>

      {/* Posts List */}
      <div className="mt-6 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Recent Posts
        </h2>

        {/* Placeholder posts - will be real data later */}
        {["post-1", "post-2", "post-3"].map((postId) => (
          <Link
            key={postId}
            href={`/c/${slug}/${postId}`}
            className="block rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
          >
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              Example Post Title
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Posted by u/user123 • 2 hours ago
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ISR: Revalidate community data every 30 seconds
// This means the page is static but refreshes after 30s
export const revalidate = 30;
