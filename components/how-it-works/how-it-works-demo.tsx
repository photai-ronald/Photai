import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const capabilities = [
  "Background removal & replacement",
  "AI-powered image enhancement",
  "Lifestyle scene generation",
  "Product variation creation",
  "Ad creative generation",
  "Multi-platform optimization",
  "Batch processing",
  "Brand consistency checks"
]

export function HowItWorksDemo() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                src="/images/product-dashboard.jpg"
                alt="Photai Dashboard"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 rounded-xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Processing Power</p>
                  <p className="text-xs text-muted-foreground">1000+ images/minute</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">POWERFUL CAPABILITIES</p>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
                Everything You Need in One Platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our AI handles the heavy lifting so you can focus on growing your business. 
                From basic edits to complex creative generation, Photai does it all.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
