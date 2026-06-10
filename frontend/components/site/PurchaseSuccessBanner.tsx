"use client";

import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

export function PurchaseSuccessBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="mb-8 flex items-start justify-between gap-4 rounded-2xl border border-accent/30 bg-accent/10 px-6 py-4">
      <div className="flex items-center gap-3">
        <CheckCircle className="size-5 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-semibold text-foreground">
            You&apos;re in — all guides unlocked.
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Welcome email on its way. Start with any guide below.
          </p>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="shrink-0 text-muted-foreground transition hover:text-foreground"
        aria-label="Dismiss"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
