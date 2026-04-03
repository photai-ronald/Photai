"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What counts as an image generation?",
    answer: "An image generation includes any AI-powered image creation or manipulation, such as background removal, scene generation, image enhancement, or product photo creation. Batch processing of multiple images counts as multiple generations."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle."
  },
  {
    question: "What happens if I exceed my monthly limits?",
    answer: "We'll notify you when you're approaching your limits. You can choose to upgrade your plan or purchase additional credits. We never cut off access unexpectedly - your work continues uninterrupted."
  },
  {
    question: "Do unused credits roll over?",
    answer: "On annual plans, unused credits roll over for up to 3 months. Monthly plan credits reset each billing cycle. Enterprise plans have custom rollover policies."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans include a 14-day free trial with full access to features. No credit card required to start. You can explore all capabilities before committing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual Enterprise plans. All payments are processed securely."
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a 30-day money-back guarantee for new customers. If you're not satisfied with Photai, contact our support team for a full refund within your first 30 days."
  },
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer: "Yes! We offer special pricing for early-stage startups (up to 50% off) and non-profit organizations (up to 30% off). Contact our sales team to learn more about eligibility."
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
