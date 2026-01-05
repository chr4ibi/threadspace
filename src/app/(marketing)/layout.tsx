import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
