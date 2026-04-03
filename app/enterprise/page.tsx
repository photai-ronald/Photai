import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EnterpriseHero } from "@/components/enterprise/enterprise-hero"
import { EnterpriseFeatures } from "@/components/enterprise/enterprise-features"
import { EnterpriseSecurity } from "@/components/enterprise/enterprise-security"
import { EnterpriseTestimonial } from "@/components/enterprise/enterprise-testimonial"
import { EnterpriseCta } from "@/components/enterprise/enterprise-cta"

export const metadata: Metadata = {
  title: "Enterprise - Photai | AI Visual Content at Scale",
  description: "Enterprise-grade AI visual content platform with dedicated support, custom integrations, advanced security, and unlimited scalability.",
}

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <EnterpriseHero />
      <EnterpriseFeatures />
      <EnterpriseSecurity />
      <EnterpriseTestimonial />
      <EnterpriseCta />
      <Footer />
    </main>
  )
}
