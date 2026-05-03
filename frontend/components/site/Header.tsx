import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <Link
          href="/pricing"
          className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition hover:bg-amber-400"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
}
