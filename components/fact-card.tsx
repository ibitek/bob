import type { Category, Fact } from '@/lib/facts'

export function FactCard({
  fact,
  category,
}: {
  fact: Fact
  category: Category | undefined
}) {
  const Icon = category?.icon

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {Icon ? <Icon className="size-4 text-primary" aria-hidden="true" /> : null}
          {category?.name}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-foreground text-balance">
        {fact.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
        {fact.description}
      </p>

      {fact.stat ? (
        <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-4">
          <span className="font-display text-2xl font-bold text-primary">
            {fact.stat}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {fact.statLabel}
          </span>
        </div>
      ) : null}
    </article>
  )
}
