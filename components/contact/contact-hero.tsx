import { MessageSquare } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">CONTACT SALES</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Let&apos;s Talk About Your Needs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Ready to transform your visual content workflow? Our team will help you find 
            the perfect solution for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
