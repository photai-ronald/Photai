"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

const codeExamples = {
  curl: `curl -X POST https://api.photai.com/v1/remove-background \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/product.jpg",
    "output_format": "png"
  }'`,
  
  python: `import photai

client = photai.Client(api_key="YOUR_API_KEY")

result = client.remove_background(
    image_url="https://example.com/product.jpg",
    output_format="png"
)

print(result.output_url)`,

  javascript: `const Photai = require('photai');

const client = new Photai({ apiKey: 'YOUR_API_KEY' });

const result = await client.removeBackground({
  imageUrl: 'https://example.com/product.jpg',
  outputFormat: 'png'
});

console.log(result.outputUrl);`
}

type Language = keyof typeof codeExamples

export function ApiCodeExample() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("curl")
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeLanguage])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Simple Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started with just a few lines of code.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            {/* Language tabs */}
            <div className="flex border-b border-border bg-muted/30">
              {(Object.keys(codeExamples) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLanguage(lang)}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeLanguage === lang
                      ? "text-primary border-b-2 border-primary bg-card"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang === "curl" ? "cURL" : lang === "python" ? "Python" : "JavaScript"}
                </button>
              ))}
              <div className="ml-auto pr-2 flex items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={copyCode}
                  className="h-8 px-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="ml-1.5">{copied ? "Copied" : "Copy"}</span>
                </Button>
              </div>
            </div>

            {/* Code block */}
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm text-foreground font-mono">
                <code>{codeExamples[activeLanguage]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
