"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok">("idle");

  // Phase 1 stub: log + flip to success. Wired to Resend in step 1.11.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => setStatus("ok"), 400);
  }

  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          One email a week. Real builds, real numbers.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          New guides, dispatch notes, and the occasional teardown of a flop.
          Unsubscribe in a click.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="h-12 flex-1 rounded-full border border-border bg-card px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            disabled={status !== "idle"}
          />
          <button
            type="submit"
            disabled={status !== "idle"}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:bg-amber-400 disabled:opacity-60"
          >
            {status === "ok" ? "Subscribed" : status === "submitting" ? "…" : "Subscribe"}
          </button>
        </form>
        {status === "ok" && (
          <p className="mt-4 text-sm text-muted-foreground">
            Check your inbox to confirm.
          </p>
        )}
      </div>
    </section>
  );
}
