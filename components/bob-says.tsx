import { Quote } from 'lucide-react'

export function BobSays() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <figure className="relative flex flex-col gap-5 rounded-3xl border border-border bg-card px-6 py-10 sm:flex-row sm:gap-8 sm:px-12">
        <div className="flex shrink-0 items-start">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Quote className="size-7" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <figcaption className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Bob mówi
          </figcaption>
          <blockquote className="font-display text-xl font-semibold leading-snug text-foreground text-balance sm:text-2xl">
            Jak zagotować treść pokarmową w żołądku: najpierw musisz się mocno
            spiąć, żeby poczuć sytość, a przez ten komunikat twój mózg wysyła
            impuls do trzustki i wątroby, by wysłały więcej enzymów do żołądka —
            i kwas w żołądku po tym mógłby wyżreć całe ciało.
          </blockquote>
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            (Uwaga: to żartobliwa wersja Boba — na szczęście śluzówka żołądka
            odnawia się co kilka dni, więc kwas trawi obiad, a nie nas.)
          </p>
        </div>
      </figure>
    </section>
  )
}
