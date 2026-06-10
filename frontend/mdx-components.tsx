import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display mb-4 mt-0 text-4xl font-bold leading-tight text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display mb-3 mt-10 text-2xl font-semibold text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-8 text-xl font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 leading-relaxed text-muted-foreground">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent underline underline-offset-4 transition hover:text-amber-400"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 ml-4 list-disc space-y-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 ml-4 list-decimal space-y-2 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-sm text-accent">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-5 overflow-x-auto rounded-lg bg-white/5 p-4 font-mono text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-border/40" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  table: ({ children }) => (
    <div className="mb-5 overflow-x-auto rounded-lg border border-border/40">
      <table className="w-full border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-white/5 text-foreground">{children}</thead>
  ),
  tr: ({ children }) => (
    <tr className="border-b border-border/40 last:border-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2.5 font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 text-muted-foreground">{children}</td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
