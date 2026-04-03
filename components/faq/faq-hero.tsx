import { HelpCircle } from "lucide-react"

export function FaqHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Find answers to common questions about Photai. Can&apos;t find what you&apos;re looking for? 
            Our support team is always here to help.
          </p>
        </div>
      </div>
    </section>
  )
}
