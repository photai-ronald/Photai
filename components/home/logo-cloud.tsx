const brands = [
  { name: "Amazon", logo: "Amazon" },
  { name: "Shopify", logo: "Shopify" },
  { name: "Walmart", logo: "Walmart" },
  { name: "eBay", logo: "eBay" },
  { name: "Alibaba", logo: "Alibaba" },
  { name: "Target", logo: "Target" },
]

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by leading e-commerce brands and agencies worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center"
            >
              <span className="text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
