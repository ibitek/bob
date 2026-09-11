import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { FactsSection } from '@/components/facts-section'
import { CategoriesSection } from '@/components/categories-section'
import { BobSays } from '@/components/bob-says'
import { FeaturedFact } from '@/components/featured-fact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <FactsSection />
        <CategoriesSection />
        <BobSays />
        <FeaturedFact />
      </main>
      <SiteFooter />
    </div>
  )
}
