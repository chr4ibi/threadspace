import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LoginForm } from "@/components/login-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ registered?: string; callbackUrl?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;

  // If already logged in, redirect to feed
  if (session?.user) {
    redirect("/feed");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your ThreadSpace account
          </p>
        </div>

        {params.registered === "true" && (
          <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
            Account created successfully! Please sign in.
          </div>
        )}

        <LoginForm callbackUrl={params.callbackUrl} />

        <div className="text-center text-sm">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
