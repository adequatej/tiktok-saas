// Edit these values to reset the launch window.
// After changing, push to main — Vercel redeploys in ~30s.
export const launchConfig = {
  // Set this to the deadline for the $497 founders price.
  // Must be a valid ISO 8601 string (UTC).
  countdownEnd: process.env.NEXT_PUBLIC_COUNTDOWN_END ?? "2026-06-03T23:59:59Z",

  // Spots shown in the "X of N remaining" badge.
  spotsRemaining: Number(process.env.NEXT_PUBLIC_SPOTS_REMAINING ?? 8),
  spotsTotal: 23,

  founderPrice: 497,
  fullPrice: 997,
} as const;
