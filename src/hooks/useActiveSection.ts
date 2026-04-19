'use client'

import { useEffect } from 'react'
import { useNavigationStore } from '@/store/useNavigationStore'
import { SECTION_IDS } from '@/lib/constants'
import type { SectionId } from '@/types/sections.types'

/**
 * Watches all section elements and updates the navigation store
 * with the currently active section based on viewport intersection.
 */
export function useActiveSection(): void {
   const setActiveSection = useNavigationStore((s) => s.setActiveSection)
   const setNavTransparent = useNavigationStore((s) => s.setNavTransparent)

   useEffect(() => {
      const observers: IntersectionObserver[] = []

      const heroObserver = new IntersectionObserver(
         ([entry]) => {
            setNavTransparent(entry.isIntersecting)
         },
         { threshold: 0.1 }
      )

      const heroEl = document.getElementById('hero')
      if (heroEl) heroObserver.observe(heroEl)

      SECTION_IDS.forEach((id) => {
         const el = document.getElementById(id)
         if (!el) return

         const observer = new IntersectionObserver(
            ([entry]) => {
               if (entry.isIntersecting) {
                  setActiveSection(id as SectionId)
                  // Update URL hash without triggering scroll
                  if (id !== 'hero') {
                     window.history.replaceState(null, '', `#${id}`)
                  } else {
                     window.history.replaceState(null, '', '/')
                  }
               }
            },
            { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
         )

         observer.observe(el)
         observers.push(observer)
      })

      return () => {
         heroObserver.disconnect()
         observers.forEach((o) => o.disconnect())
      }
   }, [setActiveSection, setNavTransparent])
}
