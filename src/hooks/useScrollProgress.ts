'use client'

import { useEffect, useState } from 'react'

/**
 * Returns the overall page scroll progress as a value from 0 to 1.
 */
export function useScrollProgress(): number {
   const [progress, setProgress] = useState(0)

   useEffect(() => {
      const updateProgress = () => {
         const scrollTop = window.scrollY
         const docHeight = document.documentElement.scrollHeight - window.innerHeight
         const percentage = docHeight > 0 ? scrollTop / docHeight : 0
         setProgress(Math.min(Math.max(percentage, 0), 1))
      }

      window.addEventListener('scroll', updateProgress, { passive: true })
      updateProgress()

      return () => window.removeEventListener('scroll', updateProgress)
   }, [])

   return progress
}
