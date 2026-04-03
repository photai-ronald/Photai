import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, FileText } from "lucide-react"

export function EnterpriseCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ready to Transform Your Visual Content at Scale?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our enterprise team is ready to help you get started. Schedule a personalized demo 
            and discover how Photai can work for your organization.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/api-docs">
                <FileText className="mr-2 h-5 w-5" />
                View API Docs
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Or email us at{" "}
            <a href="mailto:enterprise@photai.com" className="text-primary hover:underline">
              enterprise@photai.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
