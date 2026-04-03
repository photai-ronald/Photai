import Image from "next/image"
import { Quote } from "lucide-react"

export function EnterpriseTestimonial() {
  return (
    <section className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 lg:p-16 overflow-hidden">
          <div className="absolute top-8 left-8 text-primary/20">
            <Quote className="h-24 w-24" />
          </div>
          
          <div className="relative mx-auto max-w-4xl text-center">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed text-balance">
              &ldquo;Photai has transformed how we handle visual content across our 50+ brands. 
              What used to take our team weeks now happens in hours. The enterprise features 
              give us the control and security we need, while the AI capabilities let us 
              scale like never before.&rdquo;
            </blockquote>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src="/images/founder-ronald.jpg"
                  alt="Ronald Burke"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Ronald Burke</p>
                <p className="text-sm text-muted-foreground">VP of Marketing, Global Retail Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
