"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseAnimatedCounterOptions {
  target: number;
  duration?: number;
  delay?: number;
  start?: boolean;
}

/**
 * Animates a number from 0 to target value when `start` becomes true.
 * Respects prefers-reduced-motion — shows final value immediately if set.
 */
export function useAnimatedCounter({
  target,
  duration = 2000,
  delay = 0,
  start = false,
}: UseAnimatedCounterOptions): number {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const startTime = performance.now() + delay;
    let started = false;

    const animate = (now: number) => {
      if (!started && now < startTime) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }
      started = true;

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, target, duration, delay, prefersReducedMotion]);

  return count;
}
