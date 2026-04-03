import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: "modernhome",
    company: "ModernHome Co.",
    industry: "Home & Furniture",
    logo: "MH",
    title: "How ModernHome scaled product photography by 10x while cutting costs 70%",
    description: "ModernHome was spending $50,000/month on product photography. With Photai, they now generate thousands of professional product images in-house, reducing costs and time-to-market dramatically.",
    image: "/images/case-study-1.jpg",
    results: [
      { metric: "70%", label: "Cost Reduction" },
      { metric: "10x", label: "Production Speed" },
      { metric: "45%", label: "Higher CTR" },
    ],
    quote: "Photai transformed our entire visual content workflow. What used to take weeks now takes hours.",
    author: "Sarah Chen",
    role: "Head of E-commerce",
    featured: true,
  },
  {
    id: "techgear",
    company: "TechGear Direct",
    industry: "Consumer Electronics",
    logo: "TG",
    title: "TechGear expanded to 5 marketplaces in 3 months with ListingLab",
    description: "TechGear needed to rapidly expand their marketplace presence. Using ListingLab, they optimized and published listings across Amazon, Walmart, eBay, Shopify, and Target in record time.",
    image: "/images/case-study-3.jpg",
    results: [
      { metric: "5", label: "New Marketplaces" },
      { metric: "34%", label: "Conversion Lift" },
      { metric: "2.1x", label: "Faster Launches" },
    ],
    quote: "The AI-generated listings actually outperformed our manually written ones. We were shocked.",
    author: "Emily Rodriguez",
    role: "VP of Operations",
    featured: true,
  },
  {
    id: "luxefashion",
    company: "Luxe Fashion Group",
    industry: "Fashion & Apparel",
    logo: "LF",
    title: "Luxe Fashion achieved 2.8x ROAS improvement with AngleLab",
    description: "Luxe Fashion was struggling to find winning ad creatives at scale. AngleLab helped them test 50x more variations and discover high-performing angles they never would have found manually.",
    image: "/images/case-study-2.jpg",
    results: [
      { metric: "2.8x", label: "ROAS Improvement" },
      { metric: "50x", label: "More Tests" },
      { metric: "127%", label: "CTR Increase" },
    ],
    quote: "We found winning creative angles in weeks that would have taken months to discover manually.",
    author: "Marcus Johnson",
    role: "Performance Marketing Lead",
    featured: true,
  },
  {
    id: "growthbrands",
    company: "GrowthBrands Agency",
    industry: "Marketing Agency",
    logo: "GB",
    title: "GrowthBrands scaled client services 3x without adding headcount",
    description: "As a performance marketing agency, GrowthBrands needed to deliver more creative output for their growing client base. Photai helped them triple their capacity without hiring.",
    image: "/images/product-dashboard.jpg",
    results: [
      { metric: "3x", label: "Client Capacity" },
      { metric: "0", label: "New Hires Needed" },
      { metric: "40%", label: "Margin Improvement" },
    ],
    quote: "We can now offer enterprise-level creative services at a fraction of the traditional cost.",
    author: "David Kim",
    role: "Founder & CEO",
    featured: false,
  },
  {
    id: "naturals",
    company: "Pure Naturals",
    industry: "Health & Beauty",
    logo: "PN",
    title: "Pure Naturals achieved brand consistency across 200+ products",
    description: "With a rapidly growing SKU count, Pure Naturals struggled to maintain visual consistency. Brand Intelligence helped them lock in their aesthetic across all content.",
    image: "/images/hero-visual.jpg",
    results: [
      { metric: "100%", label: "Brand Compliance" },
      { metric: "60%", label: "Less Revisions" },
      { metric: "200+", label: "SKUs Managed" },
    ],
    quote: "Every product image now looks like it belongs to the same family. Our brand has never looked better.",
    author: "Lisa Wang",
    role: "Creative Director",
    featured: false,
  },
  {
    id: "sportsdirect",
    company: "Sports Direct Plus",
    industry: "Sports & Outdoor",
    logo: "SD",
    title: "Sports Direct automated 80% of their product image workflow",
    description: "With seasonal inventory changes, Sports Direct needed to process thousands of new product images quickly. Photai API integration automated their entire workflow.",
    image: "/images/ai-tools-preview.jpg",
    results: [
      { metric: "80%", label: "Automation Rate" },
      { metric: "4hrs", label: "Avg. Processing" },
      { metric: "99.2%", label: "Quality Rate" },
    ],
    quote: "What used to be a 2-week bottleneck now happens automatically in hours.",
    author: "Michael Torres",
    role: "CTO",
    featured: false,
  },
]

export function CaseStudyGrid() {
  const featuredStudies = caseStudies.filter(cs => cs.featured)
  const otherStudies = caseStudies.filter(cs => !cs.featured)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured Case Studies */}
        <div className="space-y-16 mb-24">
          {featuredStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{study.logo}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{study.company}</p>
                    <p className="text-xs text-muted-foreground">{study.industry}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground lg:text-3xl">
                  {study.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
                
                {/* Results */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center p-4 rounded-xl bg-card border border-border">
                      <p className="text-xl font-bold text-primary">{result.metric}</p>
                      <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                    </div>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="mt-8 border-l-2 border-primary pl-4">
                  <p className="text-muted-foreground italic">{`"${study.quote}"`}</p>
                  <footer className="mt-2">
                    <span className="text-sm font-medium text-foreground">{study.author}</span>
                    <span className="text-sm text-muted-foreground"> - {study.role}</span>
                  </footer>
                </blockquote>
                
                <Link 
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline"
                >
                  Read full case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={study.image}
                    alt={study.company}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Case Studies Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">More success stories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherStudies.map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{study.logo}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{study.company}</p>
                      <p className="text-xs text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <div className="mt-4 flex gap-4">
                    {study.results.slice(0, 2).map((result) => (
                      <div key={result.label}>
                        <p className="text-lg font-bold text-primary">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
