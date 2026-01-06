import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { SignupForm } from "@/components/signup-form";

export default async function SignupPage() {
  const session = await auth();

  // If already logged in, redirect to feed
  if (session?.user) {
    redirect("/feed");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join ThreadSpace to start engaging with communities
          </p>
        </div>

        <SignupForm />

        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
