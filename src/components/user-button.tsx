import Link from "next/link";
import { auth } from "@/auth";
import { LogoutButton } from "./logout-button";

export async function UserButton() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <span className="text-gray-500">Welcome, </span>
        <span className="font-medium text-gray-900">
          {session.user.username}
        </span>
      </div>
      <LogoutButton />
    </div>
  );
}
