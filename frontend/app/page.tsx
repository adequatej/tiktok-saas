export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          Earnflow AI
        </p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Build durable income streams,{" "}
          <span className="text-accent">backed by AI.</span>
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Guides, playbooks, and tools for builders who want compounding revenue —
          not another side-hustle blog.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground transition hover:bg-accent-400"
          >
            Read the guides
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Subscribe
          </a>
        </div>
      </div>
    </main>
  );
}
