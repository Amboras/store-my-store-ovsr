'use client'

import Link from 'next/link'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Spices', href: '/products' },
    { label: 'Cardamom', href: '/products?q=cardamom' },
    { label: 'Black Pepper', href: '/products?q=pepper' },
    { label: 'Spice Combos', href: '/collections' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  // Build company links dynamically based on available policies
  const companyLinks = [
    { label: 'About', href: '/about' },
  ]

  // Add policy links only if they're set in the admin
  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container-custom py-section-sm">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">🌿</span>
              <div>
                <span className="font-heading text-xl font-bold text-foreground block">Spiceasy</span>
                <span className="text-[9px] text-accent font-semibold uppercase tracking-[0.2em]">Kerala · Est. 2024</span>
              </div>
            </Link>
            {/* Kerala decorative divider */}
            <div className="flex items-center gap-2 my-4 w-28">
              <div className="h-px flex-1 bg-accent/30" />
              <span className="text-accent text-xs">❋</span>
              <div className="h-px flex-1 bg-accent/30" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Farm-fresh spices from Kumily, Kerala — sun-dried, naturally preserved,
              and packed with the flavours of God&apos;s Own Country.
            </p>
            <div className="mt-5 text-xs text-muted-foreground space-y-2">
              <p>📍 Kumily, Idukki District, Kerala</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@spiceasy.in</p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Spiceasy, Kumily, Kerala. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-muted-foreground">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
