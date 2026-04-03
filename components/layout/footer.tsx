import Link from "next/link"

const footerNavigation = {
  products: [
    { name: "ListingLab", href: "/products#listinglab" },
    { name: "AngleLab", href: "/products#anglelab" },
    { name: "AI Image Tools", href: "/products#ai-tools" },
    { name: "Brand Intelligence", href: "/products#brand-intelligence" },
    { name: "API", href: "/api-docs" },
  ],
  solutions: [
    { name: "E-commerce Brands", href: "/solutions#ecommerce" },
    { name: "Marketing Agencies", href: "/solutions#agencies" },
    { name: "Marketplaces", href: "/solutions#marketplaces" },
    { name: "Enterprise", href: "/enterprise" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "How it Works", href: "/how-it-works" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/pricing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">Photai</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered visual content and advertising creative automation for e-commerce brands.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Calle San Martin 850</p>
              <p>Concepcion, Biobio, 4030000</p>
              <p>Chile</p>
              <p className="pt-2">
                <a href="mailto:support@photai.work" className="hover:text-foreground transition-colors">
                  support@photai.work
                </a>
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Photai. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
