"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Sparkles, CreditCard, Settings, Shield, Code2, Users } from "lucide-react"

const faqCategories = [
  {
    icon: Sparkles,
    title: "Product & Features",
    questions: [
      {
        q: "What types of images can Photai process?",
        a: "Photai supports all common image formats including JPG, PNG, WebP, and TIFF. Our AI works best with product photography but can also process lifestyle images, model shots, and flat lays. We recommend images with at least 1000px on the shortest side for optimal results."
      },
      {
        q: "How accurate is the AI background removal?",
        a: "Our AI achieves 99%+ accuracy on product images with clean edges. For complex items like jewelry, fur, or transparent objects, accuracy is typically 95-98%. You can always fine-tune results with our built-in editing tools."
      },
      {
        q: "Can I generate lifestyle images for my products?",
        a: "Yes! Our AI can generate contextual lifestyle scenes for your products. Simply upload your product image, choose a scene type (living room, outdoor, office, etc.), and our AI will create realistic composite images."
      },
      {
        q: "How does the ad creative generation work?",
        a: "AngleLab analyzes your product and brand guidelines to generate multiple ad variations. It creates different hooks, headlines, and visual layouts optimized for each platform (Facebook, Instagram, Google, etc.)."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "Pricing & Billing",
    questions: [
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 14-day free trial with 100 image credits. No credit card required to start. You can explore all features and see the quality of our AI before committing."
      },
      {
        q: "How do credits work?",
        a: "Each processed image uses 1 credit for basic operations (background removal, enhancement). More complex operations like lifestyle generation use 2-3 credits. Unused credits roll over to the next month on annual plans."
      },
      {
        q: "Can I change my plan at any time?",
        a: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, the new features are available immediately. When downgrading, the change takes effect at the end of your billing cycle."
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a 30-day money-back guarantee for new customers. If you are not satisfied with Photai for any reason, contact our support team for a full refund within the first 30 days."
      }
    ]
  },
  {
    icon: Settings,
    title: "Technical & Integration",
    questions: [
      {
        q: "Which e-commerce platforms do you integrate with?",
        a: "We have native integrations with Shopify, WooCommerce, BigCommerce, Magento, and Amazon Seller Central. We also offer a REST API for custom integrations with any platform."
      },
      {
        q: "Can I use Photai with my existing workflow?",
        a: "Yes! Photai can be integrated into your existing workflow via our API, Zapier, or direct platform integrations. We also support bulk upload via CSV and folder sync for desktop workflows."
      },
      {
        q: "What is the API rate limit?",
        a: "Rate limits depend on your plan: Starter (60 req/min), Professional (300 req/min), Enterprise (custom). We also offer burst capacity for occasional high-volume processing."
      },
      {
        q: "Do you support batch processing?",
        a: "Yes, you can process up to 1,000 images in a single batch via our dashboard or API. Enterprise customers can process unlimited batch sizes with dedicated infrastructure."
      }
    ]
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    questions: [
      {
        q: "How do you handle my image data?",
        a: "Your images are encrypted in transit and at rest. We process images on secure servers and delete source files within 24 hours unless you choose to store them. Processed images are stored according to your retention preferences."
      },
      {
        q: "Is Photai GDPR compliant?",
        a: "Yes, Photai is fully GDPR compliant. We offer Data Processing Agreements (DPA), support data export/deletion requests, and maintain detailed processing records."
      },
      {
        q: "Can I keep my images private?",
        a: "Absolutely. Your images are never shared, sold, or used to train our AI models unless you explicitly opt-in to our training program (which comes with credit bonuses)."
      },
      {
        q: "What security certifications do you have?",
        a: "Photai is SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. We conduct regular third-party security audits and penetration testing."
      }
    ]
  },
  {
    icon: Code2,
    title: "API & Developers",
    questions: [
      {
        q: "Do you offer SDKs?",
        a: "Yes, we provide official SDKs for Python, Node.js, PHP, Ruby, and Go. Community SDKs are also available for other languages. All SDKs are open-source on GitHub."
      },
      {
        q: "Is there a sandbox environment?",
        a: "Yes, we provide a sandbox API environment for testing. Sandbox calls do not count against your credits and return watermarked results."
      },
      {
        q: "How do webhooks work?",
        a: "You can configure webhooks to receive notifications when async jobs complete. Webhooks include the job ID, status, and result URLs. We support retry logic and signature verification."
      },
      {
        q: "What is the maximum image size?",
        a: "The API accepts images up to 50MB and 10,000 x 10,000 pixels. For larger images, we recommend using our bulk upload feature which handles compression automatically."
      }
    ]
  },
  {
    icon: Users,
    title: "Support & Services",
    questions: [
      {
        q: "What support options are available?",
        a: "All plans include email support with 24-hour response time. Professional plans add live chat support, and Enterprise customers get dedicated success managers with priority phone support."
      },
      {
        q: "Do you offer onboarding assistance?",
        a: "Yes! All new customers receive a complimentary onboarding session. Enterprise customers get a full onboarding program including workflow design, integration setup, and team training."
      },
      {
        q: "Can you help with custom AI training?",
        a: "Enterprise customers can train custom AI models on their specific product types and brand styles. This ensures even better results for your unique catalog."
      },
      {
        q: "What is your uptime guarantee?",
        a: "We guarantee 99.9% uptime for all paid plans, with credits issued for any downtime below this threshold. Enterprise customers can negotiate custom SLAs up to 99.99%."
      }
    ]
  }
]

export function FaqCategories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {faqCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${category.title}-${index}`}
                    className="rounded-lg border border-border bg-card px-4"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
