import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionCards } from "@/components/solutions/solution-cards"
import { SolutionsCta } from "@/components/solutions/solutions-cta"

export const metadata: Metadata = {
  title: "Solutions - Photai | AI Visual Content for Every Business",
  description: "Discover how Photai helps e-commerce brands, agencies, and marketplace sellers scale their visual content production with AI.",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SolutionsHero />
      <SolutionCards />
      <SolutionsCta />
      <Footer />
    </main>
  )
}
