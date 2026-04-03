"use client"

import { 
  Upload, 
  Sparkles, 
  Download,
  ArrowDown,
  Image as ImageIcon,
  Wand2,
  FileOutput,
  Zap,
  Shield,
  Globe
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Upload Your Products",
    description: "Simply drag and drop your product images or connect your e-commerce store. We support all major platforms including Shopify, Amazon, and WooCommerce.",
    icon: Upload,
    features: [
      { icon: ImageIcon, text: "Supports JPG, PNG, WebP formats" },
      { icon: Zap, text: "Bulk upload up to 1000 images" },
      { icon: Shield, text: "Enterprise-grade security" },
    ],
    color: "from-primary to-primary/50"
  },
  {
    number: "02",
    title: "AI Works Its Magic",
    description: "Our advanced AI analyzes your products, removes backgrounds, enhances quality, and generates multiple variations including lifestyle shots and ad creatives.",
    icon: Sparkles,
    features: [
      { icon: Wand2, text: "Automatic background removal" },
      { icon: Globe, text: "Generate lifestyle contexts" },
      { icon: Sparkles, text: "Create ad variations" },
    ],
    color: "from-accent to-accent/50"
  },
  {
    number: "03",
    title: "Export & Publish",
    description: "Download your optimized images or publish directly to your connected platforms. Get perfectly sized assets for every channel automatically.",
    icon: Download,
    features: [
      { icon: FileOutput, text: "Platform-optimized exports" },
      { icon: Globe, text: "Direct publishing to stores" },
      { icon: Download, text: "Bulk download options" },
    ],
    color: "from-chart-3 to-chart-3/50"
  }
]

export function HowItWorksSteps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="relative">
                {/* Step card */}
                <div className="relative rounded-2xl border border-border bg-card p-8 lg:p-12 overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 h-64 w-64 bg-gradient-to-br ${step.color} opacity-10 blur-3xl`} />
                  
                  <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                          <step.icon className="h-10 w-10 text-background" />
                        </div>
                        <span className="absolute -top-3 -left-3 text-6xl font-bold text-muted-foreground/20">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground lg:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid gap-4 sm:grid-cols-3">
                        {step.features.map((feature) => (
                          <div 
                            key={feature.text}
                            className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                          >
                            <feature.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="h-12 w-12 rounded-full border border-border bg-card flex items-center justify-center">
                      <ArrowDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
