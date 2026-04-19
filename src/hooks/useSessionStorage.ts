'use client'

import { useEffect } from 'react'
import { SESSION_SECTION_KEY } from '@/lib/constants'
import type { SectionId } from '@/types/sections.types'

/**
 * Saves the last active section to sessionStorage for cross-reload continuity.
 */
export function useSaveSessionSection(activeSection: SectionId | null): void {
   useEffect(() => {
      if (activeSection) {
         try {
            sessionStorage.setItem(SESSION_SECTION_KEY, activeSection)
         } catch {
            // sessionStorage not available
         }
      }
   }, [activeSection])
}

/**
 * Reads the last saved section from sessionStorage.
 * Plain utility function (not a hook) — safe to call anywhere on the client.
 */
export function getSessionSection(): SectionId | null {
   if (typeof window === 'undefined') return null
   try {
      return sessionStorage.getItem(SESSION_SECTION_KEY) as SectionId | null
   } catch {
      return null
   }
}
