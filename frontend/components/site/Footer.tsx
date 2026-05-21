import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The exact TikTok Shop video system behind [X]M+ views and $[X]K
              in [X] weeks — guides, scripts, and playbooks from a top creator.
            </p>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-amber-400"
            >
              {siteConfig.tiktokHandle} on TikTok
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Product
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built for TikTok Shop creators who are serious about growth.</p>
        </div>
      </div>
    </footer>
  );
}
