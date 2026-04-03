"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Zap, 
  Image as ImageIcon, 
  Shield,
  Code
} from "lucide-react"

const products = [
  {
    id: "listinglab",
    name: "ListingLab",
    icon: FileText,
    tagline: "Marketplace Listing Optimization",
    description: "Transform raw product data into high-converting marketplace listings. Our AI generates SEO-optimized titles, bullet points, descriptions, and A+ content that ranks and converts.",
    image: "/images/listinglab-preview.jpg",
    features: [
      {
        title: "Smart Title Generation",
        description: "AI-crafted titles optimized for search algorithms and click-through rates"
      },
      {
        title: "Bullet Point Optimization",
        description: "Convert features into benefits that resonate with buyers"
      },
      {
        title: "SEO Keyword Integration",
        description: "Automatic keyword research and natural placement"
      },
      {
        title: "A+ Content Creation",
        description: "Generate enhanced brand content and comparison charts"
      },
      {
        title: "Multi-Platform Sync",
        description: "Push optimized listings to Amazon, Shopify, Walmart, eBay"
      },
      {
        title: "Bulk Processing",
        description: "Optimize thousands of SKUs simultaneously"
      },
    ],
    stats: [
      { value: "34%", label: "Avg. conversion lift" },
      { value: "2.1x", label: "Faster listing creation" },
      { value: "89%", label: "Time saved on SEO" },
    ],
    platforms: ["Amazon", "Shopify", "Walmart", "eBay", "Etsy"],
  },
  {
    id: "anglelab",
    name: "AngleLab",
    icon: Zap,
    tagline: "Ad Creative Generation at Scale",
    description: "Discover winning ad angles and generate hundreds of creative variations in minutes. Test more hypotheses, find winners faster, and scale your best-performing ads with AI.",
    image: "/images/anglelab-preview.jpg",
    features: [
      {
        title: "Angle Discovery",
        description: "AI identifies 100+ unique selling angles from your product data"
      },
      {
        title: "Hook Generation",
        description: "Create scroll-stopping headlines and opening lines"
      },
      {
        title: "Creative Variations",
        description: "Generate hundreds of ad variations for testing"
      },
      {
        title: "Multi-Format Output",
        description: "Image ads, video scripts, carousels, stories"
      },
      {
        title: "Performance Insights",
        description: "Learn from your data to improve future creatives"
      },
      {
        title: "Brand Voice Lock",
        description: "Maintain consistent tone across all variations"
      },
    ],
    stats: [
      { value: "127%", label: "Avg. CTR improvement" },
      { value: "50x", label: "More tests per month" },
      { value: "2.8x", label: "ROAS improvement" },
    ],
    platforms: ["Meta Ads", "Google Ads", "TikTok", "Pinterest", "LinkedIn"],
  },
  {
    id: "ai-tools",
    name: "AI Image Tools",
    icon: ImageIcon,
    tagline: "Professional Product Photography",
    description: "Create stunning product visuals without expensive photoshoots. Remove backgrounds, generate lifestyle scenes, enhance image quality, and process thousands of images in batch.",
    image: "/images/ai-tools-preview.jpg",
    features: [
      {
        title: "Background Removal",
        description: "Perfect cutouts in seconds with AI precision"
      },
      {
        title: "Scene Generation",
        description: "Place products in lifestyle settings automatically"
      },
      {
        title: "Image Enhancement",
        description: "Upscale, color correct, and optimize for web"
      },
      {
        title: "Shadow & Reflection",
        description: "Add professional shadows and reflections"
      },
      {
        title: "Batch Processing",
        description: "Process 1000s of images with consistent quality"
      },
      {
        title: "Format Optimization",
        description: "Auto-resize for every platform requirement"
      },
    ],
    stats: [
      { value: "2.3s", label: "Avg. processing time" },
      { value: "99.2%", label: "Accuracy rate" },
      { value: "85%", label: "Cost reduction" },
    ],
    platforms: ["PNG", "JPEG", "WebP", "TIFF", "PSD"],
  },
  {
    id: "brand-intelligence",
    name: "Brand Intelligence",
    icon: Shield,
    tagline: "Brand Consistency at Scale",
    description: "Lock in your brand guidelines, voice, and visual identity. Ensure every piece of generated content stays on-brand, even when scaling across teams and markets.",
    image: "/images/product-dashboard.jpg",
    features: [
      {
        title: "Brand Voice Training",
        description: "Train AI on your unique tone and messaging"
      },
      {
        title: "Visual Guidelines",
        description: "Define colors, fonts, and style preferences"
      },
      {
        title: "Content Rules",
        description: "Set guardrails for what can and cannot be said"
      },
      {
        title: "Team Permissions",
        description: "Control access and approval workflows"
      },
      {
        title: "Compliance Checks",
        description: "Automatic review against brand standards"
      },
      {
        title: "Asset Library",
        description: "Centralized repository for brand assets"
      },
    ],
    stats: [
      { value: "100%", label: "Brand compliance" },
      { value: "3x", label: "Faster approvals" },
      { value: "60%", label: "Less revision cycles" },
    ],
    platforms: ["Guidelines", "Templates", "Assets", "Workflows"],
  },
  {
    id: "api",
    name: "Developer API",
    icon: Code,
    tagline: "Enterprise Integration",
    description: "Integrate Photai's capabilities directly into your systems. Our REST API and SDKs make it easy to automate visual content production at any scale.",
    image: "/images/hero-visual.jpg",
    features: [
      {
        title: "REST API",
        description: "Simple, well-documented endpoints for all features"
      },
      {
        title: "SDKs",
        description: "Official libraries for Python, Node.js, and more"
      },
      {
        title: "Webhooks",
        description: "Real-time notifications for async processing"
      },
      {
        title: "Batch Operations",
        description: "Process thousands of items in single requests"
      },
      {
        title: "99.9% Uptime",
        description: "Enterprise-grade reliability and performance"
      },
      {
        title: "Dedicated Support",
        description: "Technical account managers for enterprise"
      },
    ],
    stats: [
      { value: "50ms", label: "Avg. response time" },
      { value: "10M+", label: "API calls/month" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    platforms: ["REST", "GraphQL", "Python", "Node.js", "Go"],
  },
]

export function ProductTabs() {
  const [activeProduct, setActiveProduct] = useState(products[0].id)
  const product = products.find(p => p.id === activeProduct)!

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProduct(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeProduct === p.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <p.icon className="h-4 w-4" />
              {p.name}
            </button>
          ))}
        </div>

        {/* Product Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground mb-4">
              {product.tagline}
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{product.name}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {product.stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {product.features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Platforms */}
            <div className="mt-8">
              <p className="text-xs text-muted-foreground mb-3">Supported Platforms</p>
              <div className="flex flex-wrap gap-2">
                {product.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Button asChild>
                <Link href="/demo">
                  Try {product.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
