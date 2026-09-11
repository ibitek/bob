import { Dna } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Dna className="size-4" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-bold text-foreground">
            Ciało w Liczbach
          </span>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
          Projekt edukacyjny popularyzujący wiedzę o ludzkiej anatomii. Treści
          mają charakter informacyjny i nie zastępują porady medycznej.
        </p>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ciało w Liczbach
        </p>
      </div>
    </footer>
  )
}
