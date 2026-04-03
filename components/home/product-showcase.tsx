import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const products = [
  {
    id: "listinglab",
    title: "ListingLab",
    subtitle: "Marketplace Listing Optimization",
    description: "Transform product data into high-converting listings optimized for Amazon, Shopify, Walmart, and more. Generate SEO-friendly titles, bullet points, and descriptions that rank and convert.",
    features: [
      "AI-generated product titles and descriptions",
      "SEO keyword optimization",
      "Multi-platform content sync",
      "A+ Content and EBC generation",
    ],
    cta: "Optimize Your Listings",
    href: "/products#listinglab",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: "anglelab",
    title: "AngleLab",
    subtitle: "Ad Creative Generation",
    description: "Discover winning ad angles and generate hundreds of creative variations. Test more, learn faster, and scale what works with AI-powered creative production.",
    features: [
      "100+ ad angle discovery",
      "Hook and headline generation",
      "Multi-format creative output",
      "Performance-based iteration",
    ],
    cta: "Scale Your Creatives",
    href: "/products#anglelab",
    gradient: "from-accent/20 to-primary/20",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4">Our Products</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Purpose-built tools for e-commerce growth
          </h2>
        </div>
        
        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground mb-4">
                  {product.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{product.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>
                
                <ul className="mt-8 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link href={product.href}>
                      {product.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${product.gradient} p-1`}>
                  <div className="absolute inset-1 rounded-xl bg-card overflow-hidden">
                    <Image
                      src="/images/product-dashboard.jpg"
                      alt={product.title}
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
