import { 
  Image as ImageIcon, 
  Zap, 
  BarChart3, 
  Layers, 
  Shield, 
  Globe 
} from "lucide-react"

const features = [
  {
    name: "Product Image Generation",
    description: "Generate professional product photos, white backgrounds, lifestyle scenes, and model shots in seconds.",
    icon: ImageIcon,
  },
  {
    name: "Listing Optimization",
    description: "AI-powered titles, descriptions, and bullet points optimized for Amazon, Shopify, Walmart and more.",
    icon: Zap,
  },
  {
    name: "Ad Creative at Scale",
    description: "Generate hundreds of ad variations, hooks, and angles to find your winning creative faster.",
    icon: BarChart3,
  },
  {
    name: "Batch Processing",
    description: "Process thousands of product images simultaneously with our enterprise-grade infrastructure.",
    icon: Layers,
  },
  {
    name: "Brand Consistency",
    description: "Lock in your brand guidelines, voice, and visual identity across all generated content.",
    icon: Shield,
  },
  {
    name: "Multi-Platform Export",
    description: "Auto-format and export to Amazon, Shopify, Meta, Google, TikTok with one click.",
    icon: Globe,
  },
]

export function Features() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary mb-4">Everything you need</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            One platform for all your e-commerce visual needs
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From product photography to ad creatives, we handle the entire visual content pipeline so you can focus on growth.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
