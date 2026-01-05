export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Marketing pages get a centered, narrower layout */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
