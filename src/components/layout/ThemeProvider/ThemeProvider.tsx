'use client'

import { useEffect, useCallback } from 'react'
import { useThemeStore } from '@/store/useThemeStore'
import { TooltipProvider } from '@/components/ui/Tooltip'
import type { ThemeProviderProps } from './ThemeProvider.types'

/**
 * ThemeProvider — reads persisted theme preference from localStorage,
 * applies the `.dark` class to `<html>`, and syncs with system changes.
 * Must be rendered client-side to avoid hydration mismatches.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
   const theme = useThemeStore((s) => s.theme)
   const setResolvedTheme = useThemeStore((s) => s.setResolvedTheme)

   const applyTheme = useCallback(
      (resolved: 'light' | 'dark') => {
         const root = document.documentElement
         if (resolved === 'dark') {
            root.classList.add('dark')
         } else {
            root.classList.remove('dark')
         }
         setResolvedTheme(resolved)
      },
      [setResolvedTheme]
   )

   useEffect(() => {
      const updateTheme = () => {
         if (theme === 'system') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            applyTheme(isDark ? 'dark' : 'light')
         } else {
            applyTheme(theme)
         }
      }

      updateTheme()

      // Listen for system theme changes
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = (e: MediaQueryListEvent) => {
         if (theme === 'system') {
            applyTheme(e.matches ? 'dark' : 'light')
         }
      }
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
   }, [theme, applyTheme])

   return <TooltipProvider>{children}</TooltipProvider>
}
