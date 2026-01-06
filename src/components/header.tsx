import Link from "next/link";
import { UserButton } from "./user-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">ThreadSpace</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/feed"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Feed
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
          <UserButton />
        </nav>
      </div>
    </header>
  );
}
