import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { CaseStudyStats } from "@/components/case-studies/case-study-stats"
import { CaseStudyCTA } from "@/components/case-studies/case-study-cta"

export const metadata = {
  title: "Case Studies - Photai",
  description: "See how leading e-commerce brands use Photai to transform their visual content and drive growth.",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CaseStudiesHero />
        <CaseStudyStats />
        <CaseStudyGrid />
        <CaseStudyCTA />
      </main>
      <Footer />
    </div>
  )
}
