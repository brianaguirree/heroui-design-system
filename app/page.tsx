import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-8 text-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          HeroUI Design System
        </h1>
        <p className="max-w-md text-base leading-7 text-muted">
          Living library basada en HeroUI v3. Los componentes se importan desde{" "}
          <code className="font-mono text-sm text-foreground">@heroui/react</code> y se
          customizan vía tokens en{" "}
          <code className="font-mono text-sm text-foreground">globals.css</code>.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/playground"
          className="flex h-11 items-center justify-center rounded-[var(--radius)] bg-accent px-6 font-medium text-accent-foreground transition-colors hover:opacity-90"
        >
          Playground
        </Link>
        <a
          href="http://localhost:6006"
          className="flex h-11 items-center justify-center rounded-[var(--radius)] border border-border bg-surface px-6 font-medium text-surface-foreground transition-colors hover:bg-surface-secondary"
        >
          Storybook
        </a>
      </div>
    </main>
  );
}
