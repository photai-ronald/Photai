import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageSquare, Mail } from "lucide-react"

export function FaqCta() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team is here to help. Reach out and we will get back to you as soon as possible.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:support@photai.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Average response: 2 hours
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                24/7 for Enterprise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
