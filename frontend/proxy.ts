import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const hasValidClerkKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_") ?? false;

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/guides",
  "/guides/(.*)",
  "/go/(.*)",
  "/api/webhooks/(.*)",
]);

// clerkMiddleware() is safe to construct even without a key —
// it only reads the key when a request arrives (handled by the guard below).
const clerkProxy = clerkMiddleware((_auth, _req) => {
  void isPublicRoute;
});

export function proxy(req: NextRequest, event: NextFetchEvent) {
  if (!hasValidClerkKey) return NextResponse.next();
  return clerkProxy(req, event);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico).*)",
  ],
};
