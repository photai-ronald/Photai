"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ShoppingBag, 
  Building2, 
  Store, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react"

const solutions = [
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Brands",
    subtitle: "Scale your product visuals without limits",
    description: "Transform how you create product images and ad creatives. Photai helps e-commerce brands produce thousands of high-quality visuals in minutes, not days.",
    image: "/images/case-study-1.jpg",
    benefits: [
      "Generate unlimited product variations",
      "Create platform-optimized listings",
      "Maintain brand consistency at scale",
      "Reduce photography costs by 80%"
    ],
    stats: [
      { label: "Faster Production", value: "10x", icon: Clock },
      { label: "Cost Reduction", value: "80%", icon: DollarSign },
      { label: "Conversion Lift", value: "+35%", icon: TrendingUp },
    ],
    cta: "See E-commerce Solutions",
    color: "from-primary/20 to-transparent"
  },
  {
    id: "agencies",
    icon: Building2,
    title: "Agencies & Studios",
    subtitle: "Deliver more value to your clients",
    description: "Help your clients stand out with AI-powered creative production. Scale your output without scaling your team, and offer cutting-edge visual solutions.",
    image: "/images/case-study-2.jpg",
    benefits: [
      "White-label solutions available",
      "Multi-client workspace management",
      "Bulk processing capabilities",
      "API access for custom integrations"
    ],
    stats: [
      { label: "Client Capacity", value: "3x", icon: TrendingUp },
      { label: "Project Turnaround", value: "-60%", icon: Clock },
      { label: "Revenue Growth", value: "+45%", icon: DollarSign },
    ],
    cta: "Explore Agency Solutions",
    color: "from-accent/20 to-transparent"
  },
  {
    id: "marketplaces",
    icon: Store,
    title: "Marketplace Sellers",
    subtitle: "Win on Amazon, Shopify & more",
    description: "Dominate marketplace search results with optimized listings and compelling visuals. Our AI understands what converts on each platform.",
    image: "/images/case-study-3.jpg",
    benefits: [
      "Amazon A+ Content generation",
      "Platform-specific optimization",
      "Bulk listing updates",
      "Competitor analysis insights"
    ],
    stats: [
      { label: "Search Ranking", value: "+40%", icon: TrendingUp },
      { label: "Listing Time", value: "-75%", icon: Clock },
      { label: "Sales Increase", value: "+28%", icon: DollarSign },
    ],
    cta: "View Marketplace Solutions",
    color: "from-chart-3/20 to-transparent"
  }
]

export function SolutionCards() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              id={solution.id}
              className={`flex flex-col gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center scroll-mt-24`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${solution.color}`}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-6 justify-center">
                      {solution.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground">
                            <stat.icon className="h-5 w-5 text-primary" />
                            {stat.value}
                          </div>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                  <solution.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{solution.title}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
                  {solution.subtitle}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      {solution.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
