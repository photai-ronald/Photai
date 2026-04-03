"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const stats = [
  { value: "10M+", label: "Images Generated" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "85%", label: "Time Saved" },
  { value: "3.2x", label: "Conversion Lift" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now serving 500+ enterprise brands
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              AI-Powered Visual Content for{" "}
              <span className="text-primary">E-commerce</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your product visuals, optimize listings, and generate high-converting ad creatives at scale. 
              All powered by AI built specifically for e-commerce brands.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-base">
                <Link href="/demo">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/demo">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative lg:pl-8">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main dashboard image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/hero-visual.jpg"
                  alt="Photai AI Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Background Removed</p>
                    <p className="text-xs text-muted-foreground">2.3s processing time</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/3 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">+127% CTR</p>
                    <p className="text-xs text-muted-foreground">Ad performance boost</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
