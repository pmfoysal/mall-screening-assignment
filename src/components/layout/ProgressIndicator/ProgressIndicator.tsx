'use client'

import { motion } from 'framer-motion'
import { useNavigationStore } from '@/store/useNavigationStore'
import { useLenis } from '@/components/layout/LenisProvider'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import './ProgressIndicator.styles.css'

/**
 * Fixed right-edge section progress indicator.
 * Shows one dot per navigable section — active dot is gold and enlarged.
 * Hidden on mobile/tablet.
 */
export function ProgressIndicator() {
  const activeSection = useNavigationStore((s) => s.activeSection)
  const lenisRef = useLenis()

  const scrollToSection = (href: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(href, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      })
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="progressIndicator" aria-label="Section navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id
        return (
          <motion.button
            key={item.id}
            className={cn('progressDot', isActive && 'progressDotActive')}
            onClick={() => scrollToSection(item.href)}
            aria-label={`Navigate to ${item.label}`}
            aria-current={isActive ? 'location' : undefined}
            whileTap={{ scale: 0.9 }}
            type="button"
          />
        )
      })}
    </aside>
  )
}
