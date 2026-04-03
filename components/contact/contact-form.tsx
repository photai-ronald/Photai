"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground max-w-sm">
          We have received your message and will get back to you within 24 hours. 
          Check your email for a confirmation.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work Email</Label>
          <Input id="email" type="email" placeholder="john@company.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" placeholder="Acme Inc." required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize">Company Size</Label>
          <Select required>
            <SelectTrigger id="companySize">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501+">501+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">What are you interested in?</Label>
          <Select required>
            <SelectTrigger id="interest">
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="listinglab">ListingLab - Listing Optimization</SelectItem>
              <SelectItem value="anglelab">AngleLab - Ad Creative Generation</SelectItem>
              <SelectItem value="ai-tools">AI Image Tools</SelectItem>
              <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
              <SelectItem value="api">API Access</SelectItem>
              <SelectItem value="other">Other / Multiple</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your use case and requirements..."
            rows={4}
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
          {" "}and{" "}
          <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
        </p>
      </form>
    </div>
  )
}
