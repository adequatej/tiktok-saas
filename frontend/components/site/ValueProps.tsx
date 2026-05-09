const items = [
  {
    num: "01",
    title: "The exact filming and editing system",
    body: "Step-by-step guides covering setup, process, and tools used in top-performing TikTok Shop videos. No theory — the actual workflow.",
  },
  {
    num: "02",
    title: "Scripts and content templates",
    body: "Ready-to-use video scripts and content frameworks taken directly from videos that convert. Adapt to your product and post.",
  },
  {
    num: "03",
    title: "Results you can actually verify",
    body: "Every technique is shown with real data — views, click rates, and sales figures. No vague advice, no screenshot worship.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            What you get
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Built for TikTok Shop sellers
            <br />
            who are serious about growth.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.num}>
              <span className="font-display text-sm font-semibold tracking-widest text-accent/60">
                {item.num}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
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
