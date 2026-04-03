import { Shield, CheckCircle2 } from "lucide-react"

const certifications = [
  "SOC 2 Type II Certified",
  "GDPR Compliant",
  "ISO 27001 Certified",
  "HIPAA Ready",
  "CCPA Compliant",
  "PCI DSS Level 1"
]

const securityFeatures = [
  "End-to-end encryption for all data",
  "Role-based access controls (RBAC)",
  "Audit logs and activity monitoring",
  "Data retention policies",
  "Regular penetration testing",
  "Secure API with rate limiting"
]

export function EnterpriseSecurity() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Security & Compliance</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
              Enterprise-Grade Security You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your data security is our top priority. Photai is built with enterprise security 
              standards and maintains compliance with major regulatory frameworks.
            </p>

            <div className="space-y-3">
              {securityFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Certifications & Compliance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                  >
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Need a custom compliance review?</strong>
                  <br />
                  Our security team is available to discuss your specific requirements and provide 
                  detailed documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
