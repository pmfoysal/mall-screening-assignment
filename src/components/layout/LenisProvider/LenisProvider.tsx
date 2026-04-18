"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LENIS_CONFIG } from "@/lib/constants";
import type {
  LenisContextValue,
  LenisProviderProps,
} from "./LenisProvider.types";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<LenisContextValue>({ lenis: null });

/**
 * LenisProvider — initializes smooth scroll and connects Lenis to GSAP ScrollTrigger.
 * Exposes the Lenis instance via context for programmatic scroll calls.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: LENIS_CONFIG.duration,
      easing: LENIS_CONFIG.easing,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis RAF from GSAP ticker for perfect sync
    const rafCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}

/**
 * Hook to access the Lenis instance for programmatic scroll control.
 * Usage: const { lenis } = useLenis()
 *        lenis?.scrollTo('#section', { duration: 1.2 })
 */
export function useLenis(): LenisContextValue {
  return useContext(LenisContext);
}
