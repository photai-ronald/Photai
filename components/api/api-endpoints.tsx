import { ArrowRight } from "lucide-react"

const endpoints = [
  {
    method: "POST",
    path: "/v1/remove-background",
    description: "Remove background from product images with AI precision.",
    methodColor: "bg-green-500/20 text-green-400"
  },
  {
    method: "POST",
    path: "/v1/generate-lifestyle",
    description: "Generate lifestyle context images for your products.",
    methodColor: "bg-green-500/20 text-green-400"
  },
  {
    method: "POST",
    path: "/v1/enhance-image",
    description: "Enhance image quality, resolution, and lighting.",
    methodColor: "bg-green-500/20 text-green-400"
  },
  {
    method: "POST",
    path: "/v1/generate-ad-creative",
    description: "Create ad creatives with multiple variations and hooks.",
    methodColor: "bg-green-500/20 text-green-400"
  },
  {
    method: "POST",
    path: "/v1/optimize-listing",
    description: "Generate optimized product titles and descriptions.",
    methodColor: "bg-green-500/20 text-green-400"
  },
  {
    method: "GET",
    path: "/v1/jobs/{job_id}",
    description: "Check the status of an async processing job.",
    methodColor: "bg-blue-500/20 text-blue-400"
  }
]

export function ApiEndpoints() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              API Endpoints
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A comprehensive set of endpoints for all your visual content needs.
            </p>
          </div>

          <div className="space-y-4">
            {endpoints.map((endpoint) => (
              <div 
                key={endpoint.path}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 cursor-pointer group"
              >
                <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold ${endpoint.methodColor}`}>
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono text-foreground flex-shrink-0">
                  {endpoint.path}
                </code>
                <p className="text-sm text-muted-foreground flex-1 hidden sm:block">
                  {endpoint.description}
                </p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              View all 20+ endpoints in our{" "}
              <a href="https://docs.photai.com" className="text-primary hover:underline">
                full API documentation
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
