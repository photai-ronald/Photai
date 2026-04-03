import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export function SolutionsCta() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Not Sure Which Solution is Right for You?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team will analyze your needs and recommend the perfect combination of tools and features 
              to help you achieve your goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Talk to an Expert
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
