import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { navLinks, siteConfig } from "@/lib/config";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-5 backdrop-blur-md">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-foreground transition hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Sign in
            </Link>
          </Show>
          <Link
            href="/pricing"
            className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground transition hover:bg-amber-400"
          >
            Get the Bundle
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
