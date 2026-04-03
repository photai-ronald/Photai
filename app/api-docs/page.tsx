import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ApiHero } from "@/components/api/api-hero"
import { ApiFeatures } from "@/components/api/api-features"
import { ApiCodeExample } from "@/components/api/api-code-example"
import { ApiEndpoints } from "@/components/api/api-endpoints"
import { ApiCta } from "@/components/api/api-cta"

export const metadata: Metadata = {
  title: "API Documentation - Photai | Developer Platform",
  description: "Integrate Photai's powerful AI visual content generation directly into your applications with our comprehensive REST API.",
}

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ApiHero />
      <ApiFeatures />
      <ApiCodeExample />
      <ApiEndpoints />
      <ApiCta />
      <Footer />
    </main>
  )
}
