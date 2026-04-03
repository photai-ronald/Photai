import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero"
import { HowItWorksSteps } from "@/components/how-it-works/how-it-works-steps"
import { HowItWorksDemo } from "@/components/how-it-works/how-it-works-demo"
import { HowItWorksCta } from "@/components/how-it-works/how-it-works-cta"

export const metadata: Metadata = {
  title: "How It Works - Photai | Simple 3-Step Process",
  description: "Learn how Photai transforms your product images and creates compelling ad creatives in just 3 simple steps.",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HowItWorksHero />
      <HowItWorksSteps />
      <HowItWorksDemo />
      <HowItWorksCta />
      <Footer />
    </main>
  )
}
