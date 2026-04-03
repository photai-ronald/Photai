import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingCTA } from "@/components/pricing/pricing-cta"

export const metadata = {
  title: "Pricing - Photai",
  description: "Simple, transparent pricing for teams of all sizes. Start free, scale as you grow.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PricingHero />
        <PricingCards />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  )
}
