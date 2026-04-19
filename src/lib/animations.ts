// Shared animation variants and presets for Framer Motion and GSAP

import type { Variants } from 'framer-motion'

// ─── Framer Motion Variants ──────────────────────────────────────────────────

export const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
   },
}

export const fadeInDown: Variants = {
   hidden: { opacity: 0, y: -30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
   },
}

export const fadeIn: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
   },
}

export const scaleIn: Variants = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] },
   },
}

export const staggerContainer: Variants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.08,
         delayChildren: 0.1,
      },
   },
}

export const staggerItem: Variants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
   },
}

export const luxuryFadeIn: Variants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
   },
}

export const slideInLeft: Variants = {
   hidden: { opacity: 0, x: -60 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
   },
}

export const slideInRight: Variants = {
   hidden: { opacity: 0, x: 60 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
   },
}

// ─── GSAP Easing Constants ───────────────────────────────────────────────────

export const GSAP_EASE = {
   luxury: 'power3.out',
   spring: 'back.out(1.7)',
   smooth: 'power2.out',
   cinematic: 'power4.inOut',
} as const

// ─── Viewport config for whileInView ────────────────────────────────────────

export const VIEWPORT_ONCE = { once: true, amount: 0.2 } as const
export const VIEWPORT_ONCE_HALF = { once: true, amount: 0.5 } as const
