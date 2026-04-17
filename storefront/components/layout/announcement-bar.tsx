'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white">
      {/* Subtle kolam-dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />
      <div className="container-custom relative flex items-center justify-center py-2.5 text-sm tracking-wide">
        <p className="font-semibold">
          🌿 Free shipping on orders above ₹499 &nbsp;❋&nbsp; Fresh harvest from Kumily, Kerala 🫛
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
