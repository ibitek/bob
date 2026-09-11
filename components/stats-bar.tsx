const stats = [
  { value: '37,2 bln', label: 'komórek buduje jedno ciało' },
  { value: '100 000 km', label: 'łącznej długości naczyń krwionośnych' },
  { value: '206', label: 'kości u dorosłego człowieka' },
  { value: '86 mld', label: 'neuronów w samym mózgu' },
]

export function StatsBar() {
  return (
    <section aria-label="Ciało w liczbach" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 px-2 py-8 text-center lg:px-6"
          >
            <span className="font-display text-2xl font-bold text-primary sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-sm leading-snug text-muted-foreground text-pretty">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
