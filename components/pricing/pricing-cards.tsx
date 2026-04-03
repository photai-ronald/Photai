"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Minus } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small brands just getting started with AI.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: false,
    features: [
      { name: "500 image generations/month", included: true },
      { name: "50 listing optimizations/month", included: true },
      { name: "25 ad creatives/month", included: true },
      { name: "Background removal", included: true },
      { name: "Basic image enhancement", included: true },
      { name: "Single user", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: false },
      { name: "Brand Intelligence", included: false },
      { name: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    href: "/demo",
  },
  {
    name: "Professional",
    description: "For growing brands that need more power and flexibility.",
    monthlyPrice: 199,
    yearlyPrice: 159,
    popular: true,
    features: [
      { name: "5,000 image generations/month", included: true },
      { name: "500 listing optimizations/month", included: true },
      { name: "250 ad creatives/month", included: true },
      { name: "All image tools", included: true },
      { name: "Advanced enhancement & upscaling", included: true },
      { name: "Up to 5 team members", included: true },
      { name: "Priority support", included: true },
      { name: "API access (10K calls/month)", included: true },
      { name: "Basic Brand Intelligence", included: true },
      { name: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    href: "/demo",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large brands and agencies.",
    monthlyPrice: null,
    yearlyPrice: null,
    popular: false,
    features: [
      { name: "Unlimited image generations", included: true },
      { name: "Unlimited listing optimizations", included: true },
      { name: "Unlimited ad creatives", included: true },
      { name: "All image tools", included: true },
      { name: "Custom AI model training", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Unlimited API access", included: true },
      { name: "Full Brand Intelligence suite", included: true },
      { name: "Custom integrations & SLA", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
]

export function PricingCards() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs opacity-75">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-card p-8 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                
                <div className="mt-6">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="text-4xl font-bold text-foreground">
                        ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                      {annual && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  )}
                </div>

                <Button 
                  className="w-full mt-6" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary shrink-0" />
                    ) : (
                      <Minus className="h-5 w-5 text-muted-foreground/50 shrink-0" />
                    )}
                    <span className={`text-sm ${
                      feature.included ? "text-foreground" : "text-muted-foreground/50"
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  )
}
