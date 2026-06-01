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
  "/go/(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/(.*)",
  "/api/stripe/(.*)",
]);

const clerkProxy = clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
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
