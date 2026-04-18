'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { VideoPlayer } from '@/components/shared/VideoPlayer'
import { CTAButton } from '@/components/shared/CTAButton'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { useLenis } from '@/components/layout/LenisProvider'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { mallConfig } from '@/data/mall.config'
import './HeroSection.styles.css'
import type { HeroSectionProps } from './HeroSection.types'

gsap.registerPlugin(useGSAP)

const heroStats = [
  { value: '3M SQ FT', label: '' },
  { value: '450+ BRANDS', label: '' },
  { value: '$5B+ DEVELOPMENT', label: '' },
]

/**
 * Cinematic hero section — full-viewport video background with
 * GSAP staggered entrance animation.
 */
export function HeroSection({ className }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const lenisRef = useLenis()

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        // Skip animation — show everything immediately
        gsap.set(['.heroPropertyLabel', '.heroWord', '.heroSubheadline', '.heroStat', '.heroCTA'], {
          opacity: 1,
          y: 0,
          scale: 1,
        })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.heroPropertyLabel', { opacity: 0, y: 20, duration: 0.6 }, 0.2)
        .from(
          '.heroWord',
          {
            opacity: 0,
            y: 60,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power4.out',
          },
          0.4
        )
        .from('.heroSubheadline', { opacity: 0, y: 20, duration: 0.6 }, 1.0)
        .from(
          '.heroStat',
          {
            opacity: 0,
            scale: 0.85,
            stagger: 0.1,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          1.3
        )
        .from('.heroCTA', { opacity: 0, y: 30, stagger: 0.15, duration: 0.5 }, 1.6)
    },
    { scope: containerRef }
  )

  const scrollToProperty = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#property', {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      })
    }
  }

  const scrollToLeasing = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#retail', {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      })
    }
  }

  const headlineWords = ["The World's", 'Most', 'Extraordinary', 'Destination']

  return (
    <SectionContainer id="hero" label="Hero — American Dream Introduction" className={className}>
      <div className="heroSection" ref={containerRef}>
        {/* Background Video */}
        <div className="heroVideoWrapper" aria-hidden="true">
          <VideoPlayer
            mp4Src={mallConfig.heroVideoSrc}
            posterSrc={mallConfig.heroVideoPoster}
            fallbackImageSrc={mallConfig.heroImageSrc}
            priority
            isHero
            autoPlay
            loop
            pauseWhenOffscreen={false}
            className="w-full h-full"
          />
        </div>

        {/* Overlays */}
        <div className="heroOverlay" aria-hidden="true" />
        <div className="heroOverlayBottom" aria-hidden="true" />

        {/* Content */}
        <div className="heroContent">
          <p className="heroPropertyLabel">American Dream · East Rutherford, NJ</p>

          <h1 className="heroHeadline" aria-label={mallConfig.tagline}>
            {headlineWords.map((word, i) => (
              <span key={i} className="heroWord" aria-hidden="true">
                {word}
                {i < headlineWords.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="heroSubheadline">{mallConfig.subTagline}</p>

          {/* Key Stats */}
          <div className="heroStats" aria-label="Key property statistics">
            {heroStats.map((stat) => (
              <div key={stat.value} className="heroStatItem heroStat">
                <span className="heroStatValue">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="heroCTAGroup">
            <CTAButton variant="glow" size="lg" className="heroCTA" onClick={scrollToProperty}>
              Explore the Property
            </CTAButton>
            <CTAButton variant="ghost" size="lg" className="heroCTA" onClick={scrollToLeasing}>
              View Leasing Options →
            </CTAButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="heroScrollIndicator">
          <ScrollIndicator />
        </div>
      </div>
    </SectionContainer>
  )
}
