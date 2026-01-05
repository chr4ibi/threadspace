import Link from "next/link";
import { Button } from "@/components/ui/button";

// Simulate fetching community data from a database
async function getCommunityData(slug: string) {
  // In a real app, this would be: await db.query(...)
  // For now, simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    name: slug,
    description: `Welcome to the ${slug} community`,
    memberCount: Math.floor(Math.random() * 10000),
    postCount: Math.floor(Math.random() * 1000),
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
