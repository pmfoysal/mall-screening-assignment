'use client'

import { useEffect, useState } from 'react'

/**
 * Detects the user's prefers-reduced-motion preference.
 * Returns true if animations should be minimized.
 * Initial value is read synchronously from the media query (safe on client),
 * then kept in sync via an event listener.
 */
export function useReducedMotion(): boolean {
   const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
   })

   useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

      const handler = (event: MediaQueryListEvent) => {
         setPrefersReducedMotion(event.matches)
      }

      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
   }, [])

   return prefersReducedMotion
}
