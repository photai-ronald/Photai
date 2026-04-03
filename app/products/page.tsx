import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductTabs } from "@/components/products/product-tabs"
import { ProductCTA } from "@/components/products/product-cta"

export const metadata = {
  title: "Products - Photai",
  description: "Explore Photai's suite of AI-powered tools for e-commerce visual content, listing optimization, and ad creative generation.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProductsHero />
        <ProductTabs />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  )
}
