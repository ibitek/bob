'use client'

import { useMemo, useState } from 'react'
import { categories, facts } from '@/lib/facts'
import { FactCard } from '@/components/fact-card'

const ALL = 'wszystkie'

export function FactsSection() {
  const [active, setActive] = useState<string>(ALL)

  const filtered = useMemo(
    () => (active === ALL ? facts : facts.filter((f) => f.categoryId === active)),
    [active],
  )

  const categoryById = useMemo(
    () => new Map(categories.map((c) => [c.id, c])),
    [],
  )

  return (
    <section id="fakty" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-col gap-4">
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
          Baza faktów
        </span>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Wybierz układ ciała i daj się zaskoczyć
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
          Każda ciekawostka jest oparta na wiedzy z anatomii i fizjologii —
          filtruj według kategorii, aby zgłębić konkretny fragment swojego
          organizmu.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Filtruj fakty według kategorii"
        className="mt-8 flex flex-wrap gap-2"
      >
        <FilterButton
          label="Wszystkie"
          active={active === ALL}
          onClick={() => setActive(ALL)}
        />
        {categories.map((c) => (
          <FilterButton
            key={c.id}
            label={c.name}
            active={active === c.id}
            onClick={() => setActive(c.id)}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((fact) => (
          <FactCard
            key={fact.id}
            fact={fact}
            category={categoryById.get(fact.categoryId)}
          />
        ))}
      </div>
    </section>
  )
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary'
      }`}
    >
      {label}
    </button>
  )
}
