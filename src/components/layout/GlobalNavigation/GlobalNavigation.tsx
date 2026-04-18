'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon, Monitor, ArrowRight } from 'lucide-react'
import { useNavigationStore } from '@/store/useNavigationStore'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { useLenis } from '@/components/layout/LenisProvider'
import { CTAButton } from '@/components/shared/CTAButton'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import './GlobalNavigation.styles.css'
import type { GlobalNavigationProps } from './GlobalNavigation.types'

/**
 * Fixed global navigation bar.
 * - Transparent over hero, solid on scroll
 * - Active section tracking via IntersectionObserver
 * - Mobile full-screen overlay menu
 * - Theme toggle (system → light → dark cycle)
 * - Smooth scroll via Lenis
 */
export function GlobalNavigation({ className }: GlobalNavigationProps) {
  const { activeSection, isMobileMenuOpen, isNavTransparent, setMobileMenuOpen } =
    useNavigationStore()
  const { theme, cycleTheme } = useTheme()
  const lenisRef = useLenis()

  // Hook sets up IntersectionObservers for all sections
  useActiveSection()

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [setMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
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

  const ThemeIcon = theme === 'system' ? Monitor : theme === 'light' ? Sun : Moon

  return (
    <>
      <nav
        className={cn('nav', isNavTransparent ? 'navTransparent' : 'navSolid', className)}
        aria-label="Main navigation"
      >
        <div className="navInner">
          {/* Logo */}
          <button
            className="navLogo"
            onClick={() => scrollToSection('#hero')}
            aria-label="American Dream — scroll to top"
          >
            American <span className="navLogoAccent">Dream</span>
          </button>

          {/* Desktop nav links */}
          <ul className="navLinks" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={cn('navLink', activeSection === item.id && 'navLinkActive')}
                  onClick={() => scrollToSection(item.href)}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      className="navLinkIndicator"
                      layoutId="nav-indicator"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="navControls">
            <CTAButton
              href="#events"
              variant="glow"
              size="sm"
              className="navCTAButton"
              onClick={() => scrollToSection('#events')}
            >
              Book a Call
            </CTAButton>

            {/* Theme toggle */}
            <button
              className="themeToggle"
              onClick={cycleTheme}
              aria-label={`Toggle theme. Current: ${theme}`}
              type="button"
            >
              <ThemeIcon size={16} aria-hidden="true" />
            </button>

            {/* Mobile hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <span
                className={cn('hamburgerLine hamburgerLineTop', isMobileMenuOpen && 'menuOpen')}
              />
              <span
                className={cn('hamburgerLine hamburgerLineMid', isMobileMenuOpen && 'menuOpen')}
              />
              <span
                className={cn('hamburgerLine hamburgerLineBottom', isMobileMenuOpen && 'menuOpen')}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobileMenu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobileMenuNav" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={cn(
                    'mobileNavLink',
                    activeSection === item.id && 'mobileNavLinkActive'
                  )}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                >
                  {item.label}
                  <ArrowRight size={20} aria-hidden="true" />
                </motion.button>
              ))}
            </nav>

            <div className="mobileMenuFooter">
              <p className="mobileMenuAddress">East Rutherford, NJ — 6 miles from NYC</p>
              <CTAButton
                variant="glow"
                size="sm"
                href="#events"
                onClick={() => scrollToSection('#events')}
              >
                Book a Call
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
