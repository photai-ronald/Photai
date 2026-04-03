import { 
  Users, 
  Zap, 
  Settings, 
  BarChart3, 
  Globe, 
  Headphones,
  Lock,
  RefreshCw
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Unlimited Team Members",
    description: "Add your entire organization with role-based access controls and team management features."
  },
  {
    icon: Zap,
    title: "Priority Processing",
    description: "Skip the queue with dedicated infrastructure ensuring fastest processing times."
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description: "Connect Photai to your existing tech stack with custom API integrations and webhooks."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into usage patterns, ROI tracking, and performance metrics across your organization."
  },
  {
    icon: Globe,
    title: "Multi-Region Deployment",
    description: "Data residency options with deployment in your preferred geographic regions."
  },
  {
    icon: Headphones,
    title: "Dedicated Success Manager",
    description: "A dedicated point of contact to ensure you get maximum value from Photai."
  },
  {
    icon: Lock,
    title: "Enterprise SSO",
    description: "Seamless authentication with SAML 2.0, OIDC, and integration with your identity provider."
  },
  {
    icon: RefreshCw,
    title: "Custom Training",
    description: "Train AI models on your brand assets for perfectly consistent output every time."
  }
]

export function EnterpriseFeatures() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Enterprise-Grade Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to deploy AI visual content at scale across your organization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
