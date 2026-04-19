'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
   threshold?: number | number[]
   rootMargin?: string
   once?: boolean
}

/**
 * Generic IntersectionObserver hook.
 * Returns [ref, isIntersecting]
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
   options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean] {
   const { threshold = 0.1, rootMargin = '0px', once = false } = options
   const ref = useRef<T | null>(null)
   const [isIntersecting, setIsIntersecting] = useState(false)

   useEffect(() => {
      const element = ref.current
      if (!element) return

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsIntersecting(true)
               if (once) observer.unobserve(element)
            } else if (!once) {
               setIsIntersecting(false)
            }
         },
         { threshold, rootMargin }
      )

      observer.observe(element)
      return () => observer.disconnect()
   }, [threshold, rootMargin, once])

   return [ref, isIntersecting]
}
