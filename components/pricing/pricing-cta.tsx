import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function PricingCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Start Free */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground">Start your free trial</h3>
            <p className="mt-4 text-muted-foreground">
              Get started with Photai today. No credit card required. 
              Full access to all features for 14 days.
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link href="/demo">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact Sales */}
          <div className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground">Need a custom plan?</h3>
            <p className="mt-4 text-muted-foreground">
              Our enterprise team can create a custom solution tailored to your 
              specific needs, volume, and integration requirements.
            </p>
            <Button className="mt-8" size="lg" variant="outline" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
