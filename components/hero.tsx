import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Popularnonaukowo o ciele
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Twoje ciało jest{' '}
            <span className="text-primary">dziwniejsze</span>, niż myślisz
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Zbiór zaskakujących, zabawnych i całkowicie prawdziwych faktów o
            ludzkiej anatomii. Od serca, które nigdy nie odpoczywa, po kwas
            zdolny rozpuścić metal — poznaj sekrety, które nosisz ze sobą każdego
            dnia.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#fakty"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Poznaj fakty
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#kategorie"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Przeglądaj kategorie
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <Image
              src="/images/anatomy-hero.png"
              alt="Ilustracja anatomiczna ludzkiego ciała w stylu naukowego atlasu"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
