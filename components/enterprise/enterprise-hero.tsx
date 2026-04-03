import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2 } from "lucide-react"

export function EnterpriseHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">ENTERPRISE</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            AI Visual Content Platform Built for Scale
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Empower your entire organization with enterprise-grade AI tools. Get dedicated support, 
            custom integrations, advanced security, and unlimited scalability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
