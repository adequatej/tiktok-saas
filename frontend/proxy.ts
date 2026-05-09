import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// All routes are public in Phase 1 — no dashboard to protect yet.
// This file is intentionally permissive; route protection will be added in Phase 2.
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

export const proxy = clerkMiddleware((_auth, _req) => {
  // Phase 1: all routes are public — nothing to protect.
  // isPublicRoute is referenced to suppress the unused-variable warning
  // and to make future protection easy: just add auth.protect() here.
  void isPublicRoute;
});

export const config = {
  matcher: [
    // Run on everything except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon\\.ico).*)",
  ],
};
