import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
        Contact
      </p>
      <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
        Pitch a guide, flag a fact, say hi.
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        We read everything. We reply to most of it. The fastest path is email
        - there&apos;s no contact form trying to qualify you.
      </p>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-md border border-border text-accent">
            <Mail className="size-5" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </p>
            <a
              href="mailto:peakmomentshub@gmail.com"
              className="mt-1 block font-display text-xl font-semibold tracking-tight text-foreground transition hover:text-accent"
            >
              peakmomentshub@gmail.com
            </a>
          </div>
        </div>
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Press &amp; partnerships: include &quot;press&quot; or &quot;partnership&quot;
        in the subject line for routing.
      </p>
    </article>
  );
}
