const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "$2.4B", label: "Client GMV Powered" },
  { value: "85%", label: "Average Time Saved" },
  { value: "34%", label: "Avg. Conversion Lift" },
]

export function CaseStudyStats() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
