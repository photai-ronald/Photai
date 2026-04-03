import Image from "next/image"

const testimonials = [
  {
    content: "Photai transformed our product photography workflow. We went from spending weeks on photoshoots to generating hundreds of professional images in hours. The ROI has been incredible.",
    author: "Sarah Chen",
    role: "Head of E-commerce",
    company: "ModernHome Co.",
    avatar: "/images/founder-ronald.jpg",
  },
  {
    content: "The ad creative generation is a game-changer. We tested 50x more variations last quarter and found winning angles we never would have discovered manually. Our ROAS improved by 2.8x.",
    author: "Marcus Johnson",
    role: "Performance Marketing Lead",
    company: "GrowthBrands Agency",
    avatar: "/images/founder-ronald.jpg",
  },
  {
    content: "ListingLab helped us expand to 5 new marketplaces in 3 months. The AI-generated listings actually outperformed our manually written ones. Conversion rates are up 34%.",
    author: "Emily Rodriguez",
    role: "VP of Operations",
    company: "TechGear Direct",
    avatar: "/images/founder-ronald.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4">Customer Stories</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by growth-focused brands
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex-1">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {`"${testimonial.content}"`}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
