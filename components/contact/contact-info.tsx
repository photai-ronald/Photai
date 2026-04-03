import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries",
    value: "sales@photai.com",
    href: "mailto:sales@photai.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9am-6pm EST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "123 AI Street, San Francisco, CA 94105",
    href: "https://maps.google.com"
  }
]

const features = [
  {
    icon: Clock,
    title: "24-Hour Response",
    description: "We respond to all inquiries within 24 hours"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team during business hours"
  },
  {
    icon: Calendar,
    title: "Book a Demo",
    description: "Schedule a personalized product walkthrough"
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact methods */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <method.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                <p className="text-sm text-primary mt-1">{method.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <h3 className="font-semibold text-foreground">What to Expect</h3>
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <feature.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-6 border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Prefer to schedule directly?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Book a 30-minute demo call with one of our product specialists.
        </p>
        <Button variant="outline" asChild>
          <Link href="/demo">Schedule Demo</Link>
        </Button>
      </div>

      {/* Support note */}
      <div className="text-sm text-muted-foreground">
        <p>
          For technical support, please visit our{" "}
          <a href="/faq" className="text-primary hover:underline">FAQ page</a>
          {" "}or email{" "}
          <a href="mailto:support@photai.com" className="text-primary hover:underline">
            support@photai.com
          </a>
        </p>
      </div>
    </div>
  )
}
