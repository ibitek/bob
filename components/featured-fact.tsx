import { Quote } from 'lucide-react'

export function FeaturedFact() {
  return (
    <section id="ciekawostka" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-background sm:px-14">
        <Quote
          className="absolute -right-4 -top-4 size-40 text-background/5"
          aria-hidden="true"
        />
        <div className="relative flex max-w-3xl flex-col gap-6">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Ciekawostka dnia
          </span>
          <p className="font-display text-2xl font-bold leading-snug text-balance sm:text-3xl">
            Gdyby rozprostować wszystkie naczynia krwionośne jednej osoby,
            utworzyłyby linię o długości ponad 100 000 kilometrów — wystarczająco
            długą, by dwuipółkrotnie okrążyć Ziemię wzdłuż równika.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-background/70 text-pretty">
            A wszystko to — tętnice, żyły i włoskowate naczynia cieńsze od
            ludzkiego włosa — mieści się wewnątrz jednego ciała i pracuje bez
            przerwy przez całe życie.
          </p>
        </div>
      </div>
    </section>
  )
}
