import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"

export function HowItWorksHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary mb-4">HOW IT WORKS</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            From Upload to Published in Minutes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Our AI-powered platform makes it incredibly simple to transform your product images 
            into stunning visuals and high-converting ad creatives. Here is how it works.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo Video
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
