export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* App pages get a full-width layout with sidebar space */}
      <div className="flex">
        {/* Sidebar placeholder - we'll build this later */}
        <aside className="hidden w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 lg:block">
          <div className="p-4 text-sm text-zinc-500">Sidebar (coming soon)</div>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
