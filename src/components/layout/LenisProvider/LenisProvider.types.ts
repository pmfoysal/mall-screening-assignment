import type Lenis from "lenis";

export interface LenisProviderProps {
  children: React.ReactNode;
}

export interface LenisContextValue {
  lenis: Lenis | null;
}
