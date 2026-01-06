import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Export NextAuth middleware with authConfig
// This is Edge-compatible and handles authentication checks
export default NextAuth(authConfig).auth;

// Configure which routes should run the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};
