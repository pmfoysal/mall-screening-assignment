'use client'

import { useThemeStore } from '@/store/useThemeStore'
import type { ThemeValue, ResolvedTheme } from '@/types/global.types'

interface UseThemeReturn {
   theme: ThemeValue
   resolvedTheme: ResolvedTheme
   setTheme: (theme: ThemeValue) => void
   isDark: boolean
   isLight: boolean
   toggle: () => void
   cycleTheme: () => void
}

/**
 * Theme read/write hook via ThemeStore.
 * Exposes convenient helpers for theme operations.
 */
export function useTheme(): UseThemeReturn {
   const { theme, resolvedTheme, setTheme } = useThemeStore()

   const toggle = () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
   }

   const cycleTheme = () => {
      const cycle: Record<ThemeValue, ThemeValue> = {
         system: 'light',
         light: 'dark',
         dark: 'system',
      }
      setTheme(cycle[theme])
   }

   return {
      theme,
      resolvedTheme,
      setTheme,
      isDark: resolvedTheme === 'dark',
      isLight: resolvedTheme === 'light',
      toggle,
      cycleTheme,
   }
}
