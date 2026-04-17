'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, Leaf, Award, MapPin, Star } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'

const spices = [
  { name: 'Cardamom', origin: 'Idukki Hills', emoji: '🫛', desc: 'Queen of Spices' },
  { name: 'Black Pepper', origin: 'Kumily Estates', emoji: '🌶️', desc: 'King of Spices' },
  { name: 'Turmeric', origin: 'Wayanad Valleys', emoji: '🟡', desc: 'Golden Healer' },
  { name: 'Cinnamon', origin: 'Kerala Coast', emoji: '🪵', desc: 'Sweet Bark' },
  { name: 'Cloves', origin: 'Periyar Forests', emoji: '🌿', desc: 'Aromatic Bud' },
  { name: 'Nutmeg', origin: 'Thrissur Groves', emoji: '🫙', desc: 'Mystic Spice' },
]

const testimonials = [
  { name: 'Priya S.', city: 'Bengaluru', text: 'The cardamom is absolutely divine — nothing like what you get in supermarkets. Straight from the hills!', stars: 5 },
  { name: 'Rahul M.', city: 'Mumbai', text: 'I could smell the freshness the moment I opened the package. My biryanis have never been the same.', stars: 5 },
  { name: 'Anjali K.', city: 'Chennai', text: 'Authentic Kerala flavours delivered to my doorstep. The black pepper is exceptional quality.', stars: 5 },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-green-950 text-white">
        {/* Decorative circles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-green-400 blur-3xl" />
        </div>

        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200">
              <MapPin className="h-3.5 w-3.5" />
              Kumily, Kerala · Est. 2024
            </div>
            <h1 className="text-display font-heading font-semibold text-balance leading-tight">
              Spices Straight<br />
              <span className="text-amber-400">from God&rsquo;s Own</span><br />
              Country
            </h1>
            <p className="text-lg text-amber-100/80 max-w-md leading-relaxed">
              Hand-picked, sun-dried, and packed within days of harvest. Experience the
              true flavour of Kerala's legendary spice hills — delivered to your door.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm"
                prefetch={true}
              >
                Shop Spices
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm text-white"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-amber-200/80">
                <Leaf className="h-4 w-4 text-green-400" />
                100% Natural
              </div>
              <div className="flex items-center gap-2 text-sm text-amber-200/80">
                <Award className="h-4 w-4 text-amber-400" />
                Farm-to-Table
              </div>
              <div className="flex items-center gap-2 text-sm text-amber-200/80">
                <Shield className="h-4 w-4 text-amber-300" />
                No Additives
              </div>
            </div>
          </div>

          {/* Spice Grid Card */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-3 gap-3">
              {spices.map((spice) => (
                <div
                  key={spice.name}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-colors group"
                >
                  <div className="text-3xl mb-2">{spice.emoji}</div>
                  <p className="text-xs font-semibold text-white">{spice.name}</p>
                  <p className="text-[10px] text-amber-300/70 mt-0.5">{spice.desc}</p>
                  <p className="text-[9px] text-white/40 mt-1">{spice.origin}</p>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-xl px-4 py-3 text-xs font-bold shadow-xl">
              🌿 50+ Varieties Available
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Kerala Spices ── */}
      <section className="py-section bg-muted/40">
        <div className="container-custom text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Why Choose Us</p>
          <h2 className="text-h2 font-heading font-semibold mb-4">
            Pure Spices. Ancient Land. Honest Trade.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Kumily is Kerala&rsquo;s spice capital — a misty highland town nestled at the edge
            of Periyar Tiger Reserve. Our spices are grown here by generations of farmers
            who treat each plant like family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Direct from Farms',
                desc: 'We work directly with spice farmers in Kumily, Thekkady, and Idukki — no middlemen, better prices for farmers and you.',
              },
              {
                icon: '☀️',
                title: 'Sun-Dried & Whole',
                desc: 'Every spice is naturally sun-dried to lock in essential oils, aroma, and medicinal properties — never processed artificially.',
              },
              {
                icon: '📦',
                title: 'Freshly Packed',
                desc: 'We pack only on order to ensure maximum freshness. Your spices are usually packed within 48 hours of your purchase.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-2xl p-8 border shadow-sm text-left">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-h4 font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collections ── */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── Brand Story Section ── */}
      <section className="py-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual Panel */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-800 to-green-900 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-6">🌿</div>
                  <p className="font-heading text-2xl font-semibold">Periyar Spice Hills</p>
                  <p className="text-amber-200/70 text-sm mt-2">Kumily, Idukki District</p>
                  <p className="text-amber-200/70 text-sm">Kerala — 685 509</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-amber-500 text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-heading font-bold">15+</p>
                <p className="text-xs opacity-90">Years of Farming</p>
              </div>
            </div>

            <div className="space-y-6 lg:max-w-md">
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">From the Hills of Kerala</p>
              <h2 className="text-h2 font-heading font-semibold">
                A Family Legacy, Bottled Just for You
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Periyar spice belt has been our home for generations. We grow cardamom,
                pepper, turmeric, and more on our family estates — using traditional methods
                passed down by our grandparents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we bring those same farm-fresh flavours directly to kitchens across
                India and the world — with zero compromises on quality or purity.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pb-0.5 text-accent"
                prefetch={true}
              >
                Read Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Popular Spices CTA ── */}
      <section className="py-section bg-gradient-to-r from-amber-900 to-green-900 text-white">
        <div className="container-custom text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300 font-semibold mb-3">Our Bestsellers</p>
          <h2 className="text-h2 font-heading font-semibold mb-4">
            Kerala&rsquo;s Finest, Delivered Fresh
          </h2>
          <p className="text-amber-100/70 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Cardamom that melts into your chai. Pepper that sharpens every curry.
            Turmeric that glows with life. All in one place.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm"
            prefetch={true}
          >
            Explore All Spices
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-section">
        <div className="container-custom">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold text-center mb-3">Customer Love</p>
          <h2 className="text-h2 font-heading font-semibold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-section-sm border-y bg-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            <div className="flex items-center gap-4 justify-center text-center">
              <Truck className="h-6 w-6 flex-shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Pan-India Shipping</p>
                <p className="text-xs text-muted-foreground">Free above ₹499</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center text-center">
              <Leaf className="h-6 w-6 flex-shrink-0 text-green-600" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">100% Natural</p>
                <p className="text-xs text-muted-foreground">No additives or colours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center text-center">
              <Award className="h-6 w-6 flex-shrink-0 text-amber-600" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Farm Certified</p>
                <p className="text-xs text-muted-foreground">Direct from Kumily farms</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center text-center">
              <Shield className="h-6 w-6 flex-shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-section bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-950/30 dark:to-green-950/30">
        <div className="container-custom max-w-xl text-center">
          <div className="text-4xl mb-4">🌶️</div>
          <h2 className="text-h2 font-heading font-semibold">Stay Flavourful</h2>
          <p className="mt-3 text-muted-foreground">
            Get seasonal harvest updates, spice recipes, and exclusive offers from Kumily
            delivered straight to your inbox.
          </p>
          {subscribed ? (
            <div className="mt-8 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl px-6 py-4 text-sm font-medium">
              🎉 Welcome to the Kerala Spices family! Watch your inbox for something special.
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap rounded-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
