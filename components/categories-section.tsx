import { categories, facts } from '@/lib/facts'

export function CategoriesSection() {
  return (
    <section id="kategorie" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Kategorie
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Sześć obszarów ludzkiej anatomii
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon
            const count = facts.filter(
              (f) => f.categoryId === category.id,
            ).length
            return (
              <div
                key={category.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.tagline}
                  </p>
                </div>
                <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary">
                  {count} {count === 1 ? 'ciekawostka' : 'ciekawostki'}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
