import { BookOpen, Wrench, LineChart } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Deeply researched guides",
    body: "Long-form playbooks for affiliate, content, and software income streams. Sourced from operators, not aggregators.",
  },
  {
    icon: Wrench,
    title: "Tools you can actually run",
    body: "Lightweight utilities — calculators, scrapers, generators — that turn a guide into a workflow you can ship today.",
  },
  {
    icon: LineChart,
    title: "Numbers from real builders",
    body: "Every claim is grounded in tracked revenue. We publish the math. No screenshot worship.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Why Earnflow
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            A media brand for people who actually ship.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title}>
              <div className="flex size-10 items-center justify-center rounded-md border border-border bg-card text-accent">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
