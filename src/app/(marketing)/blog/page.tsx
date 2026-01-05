// Simulate fetching blog posts from an API/database
async function getBlogPosts() {
  // In production, this would be: await fetch(...) or db.query(...)
  const generatedAt = new Date().toISOString();

  return {
    generatedAt,
    posts: [
      {
        id: 1,
        title: "Getting Started with ThreadSpace",
        excerpt: "Learn how to create your first community",
        date: "2024-01-15",
      },
      {
        id: 2,
        title: "Best Practices for Community Moderation",
        excerpt: "Keep your community healthy and engaged",
        date: "2024-01-10",
      },
      {
        id: 3,
        title: "ThreadSpace 2.0 Release Notes",
        excerpt: "What's new in the latest version",
        date: "2024-01-05",
      },
    ],
  };
}

export default async function BlogPage() {
  const { posts, generatedAt } = await getBlogPosts();

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>

      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Page generated at: <strong>{generatedAt}</strong>
      </p>

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {post.title}
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
            <time className="mt-2 block text-sm text-zinc-500 dark:text-zinc-400">
              {post.date}
            </time>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
        <h3 className="font-medium text-blue-900 dark:text-blue-100">
          ISR Behavior
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-blue-800 dark:text-blue-200">
          <li>• First visit: Serves static page (fast!)</li>
          <li>• After 60 seconds: Next visit triggers regeneration</li>
          <li>• While regenerating: Still serves stale page (no waiting!)</li>
          <li>• After regeneration: New page is cached</li>
        </ul>
        <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
          Try: Visit this page, wait 60+ seconds, refresh. The timestamp will
          update on the second refresh.
        </p>
      </div>
    </div>
  );
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;
