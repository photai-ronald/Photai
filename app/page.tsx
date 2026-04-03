import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { LogoCloud } from "@/components/home/logo-cloud"
import { Features } from "@/components/home/features"
import { ProductShowcase } from "@/components/home/product-showcase"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
