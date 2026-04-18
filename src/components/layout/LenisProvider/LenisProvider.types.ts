import type Lenis from 'lenis'

export interface LenisProviderProps {
  children: React.ReactNode
}

// Context holds the mutable ref so consumers always get the latest
// Lenis instance without causing re-renders when it's set.
export type LenisContextValue = React.MutableRefObject<Lenis | null>
