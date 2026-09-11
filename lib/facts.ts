import type { LucideIcon } from 'lucide-react'
import {
  Bone,
  Brain,
  Droplets,
  Eye,
  HeartPulse,
  Sparkles,
} from 'lucide-react'

export type Category = {
  id: string
  name: string
  tagline: string
  icon: LucideIcon
}

export type Fact = {
  id: string
  categoryId: string
  title: string
  description: string
  stat?: string
  statLabel?: string
}

export const categories: Category[] = [
  {
    id: 'mozg',
    name: 'Mózg i nerwy',
    tagline: 'Centrum dowodzenia',
    icon: Brain,
  },
  {
    id: 'serce',
    name: 'Serce i krew',
    tagline: 'Niestrudzona pompa',
    icon: HeartPulse,
  },
  {
    id: 'kosci',
    name: 'Kości i mięśnie',
    tagline: 'Rusztowanie ciała',
    icon: Bone,
  },
  {
    id: 'zmysly',
    name: 'Skóra i zmysły',
    tagline: 'Granica ze światem',
    icon: Eye,
  },
  {
    id: 'wnetrze',
    name: 'Wnętrzności',
    tagline: 'Fabryka chemiczna',
    icon: Droplets,
  },
  {
    id: 'osobliwosci',
    name: 'Osobliwości',
    tagline: 'Zupełnie nieoczekiwane',
    icon: Sparkles,
  },
]

export const facts: Fact[] = [
  {
    id: 'serce-uderzenia',
    categoryId: 'serce',
    title: 'Twoje serce nie robi sobie przerw',
    description:
      'W ciągu doby serce kurczy się około 100 000 razy, a przez całe życie przepompowuje ilość krwi, która wypełniłaby ponad 40 basenów olimpijskich.',
    stat: '100 000',
    statLabel: 'uderzeń na dobę',
  },
  {
    id: 'mozg-energia',
    categoryId: 'mozg',
    title: 'Mózg to energetyczny żarłok',
    description:
      'Choć waży zaledwie około 2% masy ciała, mózg zużywa mniej więcej 20% całej energii, jaką produkuje organizm. Myślenie naprawdę kosztuje.',
    stat: '20%',
    statLabel: 'energii ciała',
  },
  {
    id: 'zoladek-kwas',
    categoryId: 'wnetrze',
    title: 'Kwas żołądkowy rozpuściłby żyletkę',
    description:
      'Kwas solny w żołądku jest tak silny, że mógłby uszkodzić metal. Przed samostrawieniem chroni nas śluzówka, która odnawia się co kilka dni.',
    stat: 'pH ~1,5',
    statLabel: 'kwasowość soku',
  },
  {
    id: 'kichniecie-predkosc',
    categoryId: 'zmysly',
    title: 'Kichnięcie jest szybsze niż samochód',
    description:
      'Powietrze wyrzucane podczas kichnięcia może pędzić z prędkością nawet 160 km/h, unosząc ze sobą tysiące mikroskopijnych kropelek.',
    stat: '160 km/h',
    statLabel: 'prędkość kichnięcia',
  },
  {
    id: 'kosci-wytrzymalosc',
    categoryId: 'kosci',
    title: 'Kość udowa jest twardsza niż beton',
    description:
      'Gram za gramem kość udowa wytrzymuje większe obciążenie niż beton czy stal. To najdłuższa i najmocniejsza kość w całym ciele.',
    stat: '4x',
    statLabel: 'mocniejsza niż beton',
  },
  {
    id: 'jelita-dlugosc',
    categoryId: 'wnetrze',
    title: 'W środku masz kilkumetrowy labirynt',
    description:
      'Samo jelito cienkie ma około 6–7 metrów długości i jest zwinięte w brzuchu. Jego powierzchnia chłonna jest wielkości boiska do tenisa.',
    stat: '~7 m',
    statLabel: 'długość jelita cienkiego',
  },
  {
    id: 'skora-komorki',
    categoryId: 'zmysly',
    title: 'Ciągle gubisz kawałki siebie',
    description:
      'Skóra to największy narząd ciała. Każdego dnia tracisz setki tysięcy martwych komórek naskórka — spora część kurzu w domu to właśnie ty.',
    stat: '600 tys.',
    statLabel: 'komórek dziennie',
  },
  {
    id: 'mozg-bol',
    categoryId: 'mozg',
    title: 'Mózg sam nie czuje bólu',
    description:
      'W tkance mózgu nie ma receptorów bólowych. Dlatego operacje neurochirurgiczne można wykonywać, gdy pacjent jest w pełni przytomny.',
    stat: '0',
    statLabel: 'receptorów bólu',
  },
  {
    id: 'plyca-powierzchnia',
    categoryId: 'wnetrze',
    title: 'Płuca kryją ogromną powierzchnię',
    description:
      'Gdyby rozłożyć wszystkie pęcherzyki płucne na płasko, zajęłyby powierzchnię porównywalną z kortem tenisowym — a mieszczą się w klatce piersiowej.',
    stat: '~70 m²',
    statLabel: 'powierzchnia wymiany gazów',
  },
  {
    id: 'zyrafa-kregi',
    categoryId: 'kosci',
    title: 'Masz tyle kręgów szyi co żyrafa',
    description:
      'Zarówno człowiek, jak i żyrafa mają dokładnie siedem kręgów szyjnych. U żyrafy są po prostu znacznie dłuższe.',
    stat: '7',
    statLabel: 'kręgów szyjnych',
  },
  {
    id: 'laskotanie',
    categoryId: 'osobliwosci',
    title: 'Nie połaskoczesz sam siebie',
    description:
      'Móżdżek przewiduje ruchy twoich własnych rąk i „wycisza” reakcję. Dlatego łaskotki działają tylko wtedy, gdy robi je ktoś inny.',
    stat: '1',
    statLabel: 'winowajca: móżdżek',
  },
  {
    id: 'wzrost-dobowy',
    categoryId: 'osobliwosci',
    title: 'Rano jesteś wyższy niż wieczorem',
    description:
      'W ciągu dnia krążki międzykręgowe lekko się spłaszczają pod wpływem grawitacji. Po przespanej nocy odzyskujesz około centymetra wzrostu.',
    stat: '~1 cm',
    statLabel: 'różnicy w ciągu doby',
  },
]
