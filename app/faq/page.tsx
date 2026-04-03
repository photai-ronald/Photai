import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqCategories } from "@/components/faq/faq-categories"
import { FaqCta } from "@/components/faq/faq-cta"

export const metadata: Metadata = {
  title: "FAQ - Photai | Frequently Asked Questions",
  description: "Find answers to common questions about Photai's AI visual content platform, pricing, features, and more.",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FaqHero />
      <FaqCategories />
      <FaqCta />
      <Footer />
    </main>
  )
}
