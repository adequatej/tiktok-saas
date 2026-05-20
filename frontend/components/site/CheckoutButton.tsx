"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      if (res.status === 401) {
        router.push("/sign-in?redirect_url=/pricing");
        return;
      }
      if (!res.ok) throw new Error("checkout failed");
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="mt-8 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground transition hover:bg-amber-400 disabled:opacity-60"
    >
      {loading ? "Redirecting…" : "Get the Founders Bundle →"}
    </button>
  );
}
