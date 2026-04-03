"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { 
    name: "Products", 
    href: "/products",
    submenu: [
      { name: "ListingLab", href: "/products#listinglab", description: "Optimize marketplace listings" },
      { name: "AngleLab", href: "/products#anglelab", description: "Generate ad creatives at scale" },
      { name: "AI Image Tools", href: "/products#ai-tools", description: "Background removal, enhancement & more" },
      { name: "Brand Intelligence", href: "/products#brand-intelligence", description: "Maintain brand consistency" },
    ]
  },
  { 
    name: "Solutions", 
    href: "/solutions",
    submenu: [
      { name: "E-commerce Brands", href: "/solutions#ecommerce", description: "Scale your product visuals" },
      { name: "Agencies", href: "/solutions#agencies", description: "Deliver more for your clients" },
      { name: "Marketplaces", href: "/solutions#marketplaces", description: "Amazon, Shopify & more" },
    ]
  },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Enterprise", href: "/enterprise" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">Photai</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
                {item.submenu && <ChevronDown className="h-4 w-4" />}
              </Link>
              
              {item.submenu && activeSubmenu === item.name && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-64 rounded-xl border border-border bg-card p-2 shadow-xl">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                      >
                        <span className="block text-sm font-medium text-foreground">{subitem.name}</span>
                        <span className="block text-xs text-muted-foreground">{subitem.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Get a Demo</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mounted && mobileMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" 
            onClick={closeMobileMenu} 
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:border-l sm:border-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={closeMobileMenu}>
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-foreground">Photai</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                              onClick={closeMobileMenu}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <Link
                    href="/faq"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-foreground hover:bg-muted"
                    onClick={closeMobileMenu}
                  >
                    FAQ
                  </Link>
                  <Button className="w-full" asChild>
                    <Link href="/contact" onClick={closeMobileMenu}>Get a Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
