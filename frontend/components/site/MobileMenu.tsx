"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Show, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/lib/config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-accent/40 hover:text-foreground"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl border border-border/60 bg-card/95 p-4 backdrop-blur-md">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border/40 pt-2">
              <Show when="signed-in">
                <div className="flex items-center gap-3 px-4 py-2">
                  <UserButton />
                  <span className="text-sm text-muted-foreground">Account</span>
                </div>
              </Show>
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground"
                >
                  Sign in
                </Link>
              </Show>
            </div>
            <div className="mt-1">
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground transition hover:bg-amber-400"
              >
                Get the Bundle - $497
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
