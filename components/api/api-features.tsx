import { 
  Zap, 
  Shield, 
  Globe, 
  Clock,
  Code2,
  FileJson
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process images in milliseconds with our optimized infrastructure."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with API key authentication and rate limiting."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Serve processed images from edge locations worldwide for minimal latency."
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with automatic failover and redundancy."
  },
  {
    icon: Code2,
    title: "SDK Support",
    description: "Official SDKs for Python, Node.js, PHP, and more languages."
  },
  {
    icon: FileJson,
    title: "RESTful Design",
    description: "Clean, intuitive API design following REST best practices."
  }
]

export function ApiFeatures() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Built for Developers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to integrate AI visual content into your applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
