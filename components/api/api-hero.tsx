import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2, ArrowRight, FileJson } from "lucide-react"

export function ApiHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">API FOR DEVELOPERS</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Build Powerful Visual AI Into Your Products
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Integrate Photai&apos;s AI-powered image generation, background removal, and listing 
            optimization directly into your applications with our comprehensive REST API.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://docs.photai.com" target="_blank">
                <FileJson className="mr-2 h-5 w-5" />
                View Full Docs
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get API Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
