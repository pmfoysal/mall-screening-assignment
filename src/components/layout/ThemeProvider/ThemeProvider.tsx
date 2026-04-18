'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'
import { TooltipProvider } from '@/components/ui/Tooltip'
import type { ThemeProviderProps } from './ThemeProvider.types'

/**
 * ThemeProvider — reads persisted theme preference from localStorage,
 * applies the `.dark` class to `<html>`, and syncs with system changes.
 * Must be rendered client-side to avoid hydration mismatches.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setResolvedTheme } = useThemeStore()

  useEffect(() => {
    const applyTheme = (resolved: 'light' | 'dark') => {
      const root = document.documentElement
      if (resolved === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      setResolvedTheme(resolved)
    }

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      applyTheme(mq.matches ? 'dark' : 'light')

      const handler = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light')
      }

      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    } else {
      applyTheme(theme)
    }
  }, [theme, setResolvedTheme])

  return <TooltipProvider>{children}</TooltipProvider>
}
