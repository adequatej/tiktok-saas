// Edit these values to reset the launch window.
// After changing, push to main - Vercel redeploys in ~30s.
export const launchConfig = {
  // The founders-price countdown repeats on a fixed cycle so it never
  // permanently "expires" - it counts down from this many days, then resets.
  countdownCycleDays: 6,

  // Spots shown in the "X of N remaining" badge.
  // Remaining = spotsTotal - spotsSoldBaseline - (real purchases so far),
  // so it counts down for real as people buy, starting at 30/35.
  spotsTotal: 35,
  spotsSoldBaseline: 5,

  founderPrice: 497,
  fullPrice: 997,
} as const;
