import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Our Story — Kerala Spices, Kumily' }

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-900 to-green-900 text-white">
        <div className="container-custom py-section text-center">
          <div className="text-5xl mb-4">🌿</div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300 font-semibold mb-3">Our Story</p>
          <h1 className="text-h1 font-heading font-semibold">From the Spice Hills of Kerala</h1>
          <p className="mt-4 text-amber-100/70 max-w-xl mx-auto leading-relaxed">
            A family-owned spice farm nestled in the mist-kissed hills of Kumily, bringing
            you the purest flavours of God&apos;s Own Country since 2024.
          </p>
        </div>
      </div>

      <div className="container-custom py-section max-w-3xl">
        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <p className="text-foreground text-xl font-heading leading-relaxed">
            We started with a simple belief — that the finest spices in the world grow in
            Kerala, and every kitchen deserves access to them, fresh and unadulterated.
          </p>

          <p>
            Our family has been farming spices in Kumily&apos;s highlands for over 15 years.
            Surrounded by the Periyar Tiger Reserve, the rich red soil and misty climate
            of Idukki District create growing conditions that are unmatched anywhere in the
            world. Cardamom, black pepper, turmeric, cloves — these aren&apos;t just
            commodities to us. They are our heritage.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-6 py-8 border-y not-prose">
            {[
              { stat: '15+', label: 'Years of farming in Kumily' },
              { stat: '50+', label: 'Spice varieties grown & sourced' },
              { stat: '100%', label: 'Natural — zero additives or colours' },
              { stat: '48 hrs', label: 'From packing to dispatch' },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-start gap-4">
                <div className="text-3xl font-heading font-bold text-amber-700 dark:text-amber-400 min-w-[5rem]">{stat}</div>
                <p className="text-sm text-muted-foreground pt-2">{label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-h3 font-heading font-semibold text-foreground">
            🌱 How We Grow
          </h2>
          <p>
            Every spice on our farm is grown using traditional Kerala methods — shade-grown
            under native trees, watered by the region&apos;s natural monsoon, and harvested
            by hand at peak ripeness. We do not use chemical fertilisers. We do not use
            artificial drying. What you receive is exactly what the land gives us.
          </p>

          <h2 className="text-h3 font-heading font-semibold text-foreground">
            ☀️ Sun-Dried the Traditional Way
          </h2>
          <p>
            After harvest, our spices are spread on jute mats under the open Kerala sun
            for several days. This slow, natural drying preserves the volatile oils and
            aromatic compounds that give each spice its distinctive character. It&apos;s
            slower than machine drying — but the difference in quality is unmistakable.
          </p>

          <h2 className="text-h3 font-heading font-semibold text-foreground">
            📦 Packed with Purpose
          </h2>
          <p>
            We pack only when you order. No pre-packed warehouse stock sitting for months.
            Within 48 hours of receiving your order, your spices are weighed, packed in
            airtight food-grade pouches, and shipped directly to your door.
          </p>

          <h2 className="text-h3 font-heading font-semibold text-foreground">
            🤝 Fair to Our Farmers
          </h2>
          <p>
            Many of our spices are also sourced from neighbouring farms in Thekkady and
            Idukki. We pay a fair price — always above market rate — and build long-term
            relationships with farmers who share our values. When you buy from us, you
            support an entire community of growers in Kerala&apos;s highlands.
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 not-prose">
            <p className="text-lg font-heading font-semibold text-foreground mb-2">
              Come Visit Us in Kumily 🏡
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Our spice garden is open for visitors. Walk through our cardamom plantations,
              learn how black pepper is harvested, and take home freshly picked spices.
            </p>
            <p className="text-sm text-muted-foreground">
              📍 Kumily, Idukki District, Kerala — 685 509
            </p>
          </div>

          <div className="text-center pt-4 not-prose">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm"
            >
              Shop Our Spices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
