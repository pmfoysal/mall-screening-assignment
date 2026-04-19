import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ThemeValue, ResolvedTheme } from '@/types/global.types'
import { THEME_STORAGE_KEY } from '@/lib/constants'

interface ThemeState {
   theme: ThemeValue
   resolvedTheme: ResolvedTheme
   setTheme: (theme: ThemeValue) => void
   setResolvedTheme: (resolved: ResolvedTheme) => void
}

export const useThemeStore = create<ThemeState>()(
   persist(
      (set) => ({
         theme: 'system',
         resolvedTheme: 'dark',

         setTheme: (theme: ThemeValue) => set({ theme }),

         setResolvedTheme: (resolved: ResolvedTheme) => set({ resolvedTheme: resolved }),
      }),
      {
         name: THEME_STORAGE_KEY,
         partialize: (state) => ({ theme: state.theme }),
      }
   )
)
