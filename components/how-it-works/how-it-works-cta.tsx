import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HowItWorksCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 p-8 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to get started?</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Experience the Power of AI-Driven Visual Content
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of brands already using Photai to transform their visual content workflow. 
              Start your free trial today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
