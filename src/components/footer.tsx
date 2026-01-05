import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/feed"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/c/nextjs"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  About
                </Link>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Careers
                </span>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Documentation
                </span>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  API Reference
                </span>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Support
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Privacy
                </span>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Terms
                </span>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Guidelines
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} ThreadSpace. Built with Next.js
            14+.
          </p>
        </div>
      </div>
    </footer>
  );
}
