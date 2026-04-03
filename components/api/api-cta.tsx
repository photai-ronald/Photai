import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Key, MessageSquare } from "lucide-react"

export function ApiCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Get Started Card */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Get Your API Key
            </h3>
            <p className="text-muted-foreground mb-6">
              Start with 1,000 free API calls. No credit card required. 
              Scale up as you grow.
            </p>
            <Button asChild>
              <Link href="/demo">
                Start for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <MessageSquare className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team can help you design custom integrations, dedicated 
              infrastructure, and tailored pricing for your needs.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Talk to Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
