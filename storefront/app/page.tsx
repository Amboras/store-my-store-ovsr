'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, Leaf, Award, MapPin, Star, Sparkles } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'

const spices = [
  { name: 'Cardamom', origin: 'Idukki Hills', emoji: '🫛', desc: 'Queen of Spices' },
  { name: 'Black Pepper', origin: 'Kumily Estates', emoji: '🌑', desc: 'King of Spices' },
  { name: 'Turmeric', origin: 'Wayanad Valleys', emoji: '🟡', desc: 'Golden Healer' },
  { name: 'Cinnamon', origin: 'Kerala Coast', emoji: '🪵', desc: 'Sweet Bark' },
  { name: 'Cloves', origin: 'Periyar Forests', emoji: '🌿', desc: 'Aromatic Bud' },
  { name: 'Nutmeg', origin: 'Thrissur Groves', emoji: '🫙', desc: 'Mystic Spice' },
]

const testimonials = [
  {
    name: 'Priya S.',
    city: 'Bengaluru',
    text: 'The cardamom is absolutely divine — nothing like what you get in supermarkets. Straight from the hills!',
    stars: 5,
  },
  {
    name: 'Rahul M.',
    city: 'Mumbai',
    text: 'I could smell the freshness the moment I opened the package. My biryanis have never been the same.',
    stars: 5,
  },
  {
    name: 'Anjali K.',
    city: 'Chennai',
    text: 'Authentic Kerala flavours delivered to my doorstep. The black pepper is exceptional quality.',
    stars: 5,
  },
]

const heritageFeatures = [
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0a00] via-[#2d1000] to-[#0d2b14] text-white min-h-[90vh] flex items-center">
        {/* Kerala-inspired decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #f59e0b 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-500 blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-green-700 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-orange-600 blur-[80px] opacity-30" />
        </div>

        {/* Kerala Kolam border top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-36">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              Kumily, Kerala · Est. 2024
            </div>

            <h1 className="font-heading text-5xl lg:text-[5.5rem] font-bold leading-[1.05] text-balance">
              Spices from
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
                God&rsquo;s Own
              </span>
              <br />
              Country
            </h1>

            {/* Kerala decorative divider */}
            <div className="flex items-center gap-3 w-40">
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/60 to-transparent" />
              <span className="text-amber-400 text-lg">❋</span>
              <div className="h-px flex-1 bg-gradient-to-l from-amber-500/60 to-transparent" />
            </div>

            <p className="text-lg text-amber-100/75 max-w-md leading-relaxed font-body">
              Hand-picked, sun-dried, and packed within days of harvest. Experience the
              true flavour of Kerala&rsquo;s legendary spice hills — delivered to your door.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-200 rounded-sm shadow-lg shadow-amber-900/30 hover:shadow-amber-600/30 hover:-translate-y-0.5"
                prefetch={true}
              >
                Shop Spices
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/8 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 rounded-sm text-white"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 pt-5 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-amber-200/70">
                <Leaf className="h-4 w-4 text-green-400" />
                100% Natural
              </div>
              <div className="flex items-center gap-2 text-sm text-amber-200/70">
                <Award className="h-4 w-4 text-amber-400" />
                Farm-to-Table
              </div>
              <div className="flex items-center gap-2 text-sm text-amber-200/70">
                <Shield className="h-4 w-4 text-amber-300" />
                No Additives
              </div>
            </div>
          </div>

          {/* Spice Grid */}
          <div className="relative animate-fade-in">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-amber-500/5 blur-xl scale-105" />
            <div className="relative grid grid-cols-3 gap-3">
              {spices.map((spice) => (
                <div
                  key={spice.name}
                  className="group bg-white/8 hover:bg-white/14 border border-white/10 hover:border-amber-400/30 rounded-2xl p-4 text-center transition-all duration-200 cursor-default"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200 inline-block">
                    {spice.emoji}
                  </div>
                  <p className="text-xs font-bold text-white tracking-wide">{spice.name}</p>
                  <p className="text-[10px] text-amber-300/70 mt-0.5 font-medium">{spice.desc}</p>
                  <p className="text-[9px] text-white/35 mt-1">{spice.origin}</p>
                </div>
              ))}
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-5 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl px-5 py-3 text-xs font-bold shadow-2xl shadow-amber-900/40 border border-amber-400/30">
              <Sparkles className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
              50+ Varieties
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/20 to-transparent" />
      </section>

      {/* ── Kerala Heritage Strip ── */}
      <section className="bg-amber-500 py-4 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 text-white text-sm font-bold uppercase tracking-[0.2em]">
              <span>🌿 Cardamom Hills</span>
              <span>❋</span>
              <span>🫛 Periyar Reserve</span>
              <span>❋</span>
              <span>🌶️ Kumily Farms</span>
              <span>❋</span>
              <span>🌊 Backwaters of Kerala</span>
              <span>❋</span>
              <span>🏛️ Kathakali Heritage</span>
              <span>❋</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Why Kerala Spices ── */}
      <section className="py-section relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #92400e 0, #92400e 1px, transparent 0, transparent 50%)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="container-custom text-center relative">
          <p className="text-sm uppercase tracking-[0.25em] text-accent font-bold mb-3">Why Choose Us</p>
          <h2 className="text-h2 font-heading font-bold mb-4">
            Pure Spices. Ancient Land.{' '}
            <span className="text-accent">Honest Trade.</span>
          </h2>
          {/* Kerala divider motif */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-accent text-2xl">❋</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-14 font-body">
            Kumily is Kerala&rsquo;s spice capital — a misty highland town nestled at the edge
            of Periyar Tiger Reserve. Our spices are grown here by generations of farmers
            who treat each plant like family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heritageFeatures.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-3xl p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 text-left group"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-h4 font-heading font-bold mb-3 text-foreground">{item.title}</h3>
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

      {/* ── Brand Story ── */}
      <section className="py-section bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Visual Panel — Kerala-inspired mosaic */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0900] via-[#2d1500] to-[#0d2b14] flex items-center justify-center relative">
                {/* Decorative kolam-inspired ring */}
                <div className="absolute inset-6 rounded-2xl border border-amber-400/20" />
                <div className="absolute inset-10 rounded-xl border border-amber-400/10" />
                <div className="text-center text-white p-10 relative z-10">
                  <div className="text-9xl mb-6">🌿</div>
                  <p className="font-heading text-3xl font-bold text-amber-100">Periyar Spice Hills</p>
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <div className="h-px w-10 bg-amber-400/40" />
                    <span className="text-amber-400 text-sm">❋</span>
                    <div className="h-px w-10 bg-amber-400/40" />
                  </div>
                  <p className="text-amber-200/60 text-sm mt-3">Kumily, Idukki District</p>
                  <p className="text-amber-200/60 text-sm">Kerala — 685 509</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-gradient-to-br from-amber-500 to-amber-700 text-white rounded-2xl px-6 py-4 shadow-2xl border border-amber-400/20">
                <p className="text-4xl font-heading font-black">15+</p>
                <p className="text-xs font-semibold opacity-90 uppercase tracking-wide">Years of Farming</p>
              </div>
            </div>

            <div className="space-y-7 lg:max-w-lg">
              <p className="text-sm uppercase tracking-[0.25em] text-accent font-bold">From the Hills of Kerala</p>
              <h2 className="text-h2 font-heading font-bold text-balance">
                A Family Legacy,{' '}
                <span className="text-accent">Bottled</span>{' '}
                Just for You
              </h2>
              {/* Kerala divider */}
              <div className="flex items-center gap-3 w-32">
                <div className="h-px flex-1 bg-accent/40" />
                <span className="text-accent">❋</span>
                <div className="h-px flex-1 bg-accent/40" />
              </div>
              <p className="text-muted-foreground leading-relaxed font-body">
                The Periyar spice belt has been our home for generations. We grow cardamom,
                pepper, turmeric, and more on our family estates — using traditional methods
                passed down by our grandparents.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Today, we bring those same farm-fresh flavours directly to kitchens across
                India and the world — with zero compromises on quality or purity.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.15em] text-accent hover:gap-4 transition-all duration-200"
                prefetch={true}
              >
                Read Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bestsellers CTA ── */}
      <section className="py-section relative overflow-hidden">
        {/* Kerala temple-inspired dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b14] via-[#14200a] to-[#1a0900]" />
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #f59e0b 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Kolam top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="container-custom text-center relative z-10">
          <div className="text-5xl mb-5">🌶️</div>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 font-bold mb-4">Our Bestsellers</p>
          <h2 className="text-h2 font-heading font-bold mb-5 text-white">
            Kerala&rsquo;s Finest,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Delivered Fresh
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="text-amber-400 text-xl">❋</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
          <p className="text-amber-100/60 max-w-xl mx-auto mb-10 leading-relaxed font-body">
            Cardamom that melts into your chai. Pepper that sharpens every curry.
            Turmeric that glows with life. All in one place.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-200 rounded-sm shadow-lg shadow-amber-900/40 hover:-translate-y-0.5"
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
          <p className="text-sm uppercase tracking-[0.25em] text-accent font-bold text-center mb-3">Customer Love</p>
          <h2 className="text-h2 font-heading font-bold text-center mb-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-14">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
            <span className="text-accent text-xl">❋</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gradient-to-br from-amber-50/60 to-background border border-amber-100 dark:from-amber-950/20 dark:border-amber-900/30 rounded-3xl p-7 hover:shadow-md hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-6 font-body italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-section-sm border-y bg-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { icon: <Truck className="h-6 w-6 text-accent" strokeWidth={1.5} />, title: 'Pan-India Shipping', sub: 'Free above ₹499' },
              { icon: <Leaf className="h-6 w-6 text-green-600" strokeWidth={1.5} />, title: '100% Natural', sub: 'No additives or colours' },
              { icon: <Award className="h-6 w-6 text-amber-600" strokeWidth={1.5} />, title: 'Farm Certified', sub: 'Direct from Kumily farms' },
              { icon: <Shield className="h-6 w-6 text-accent" strokeWidth={1.5} />, title: 'Secure Checkout', sub: '256-bit SSL encryption' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 justify-center text-center">
                {item.icon}
                <div className="text-left">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-section">
        <div className="container-custom max-w-2xl text-center">
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/40" />
            <span className="text-5xl">🫛</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/40" />
          </div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent font-bold mb-3">Stay Flavourful</p>
          <h2 className="text-h2 font-heading font-bold">Join the Spiceasy Family</h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-md mx-auto">
            Seasonal harvest updates, traditional Kerala recipes, and exclusive farm-fresh
            offers — delivered straight to your inbox.
          </p>
          {subscribed ? (
            <div className="mt-10 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-2xl px-8 py-5 text-sm font-semibold">
              🎉 Welcome to the Spiceasy family! Watch your inbox for something special from Kerala.
            </div>
          ) : (
            <form className="mt-10 flex gap-3 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border border-border bg-background rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap rounded-sm"
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
