'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import './BrandLogoGrid.styles.css'
import type { BrandLogoGridProps } from './BrandLogoGrid.types'

const itemVariants: Variants = {
   hidden: { opacity: 0, scale: 0.92 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.35,
         ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
   },
   exit: { opacity: 0, scale: 0.88, transition: { duration: 0.2 } },
}

/**
 * Animated brand logo grid with category filtering.
 * Logos animate in/out when active category changes.
 */
export function BrandLogoGrid({ brands, activeCategory = 'all', className }: BrandLogoGridProps) {
   const filtered = activeCategory === 'all' ? brands : brands.filter((b) => b.category === activeCategory)

   return (
      <div className={cn('brandGrid', className)} role="list" aria-label="Brand directory">
         <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
               <motion.p
                  key="empty"
                  className="brandEmptyState"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
               >
                  No brands in this category
               </motion.p>
            ) : (
               filtered.map((brand) => (
                  <motion.div
                     key={brand.name}
                     className="brandCard"
                     role="listitem"
                     variants={itemVariants}
                     initial="hidden"
                     animate="visible"
                     exit="exit"
                     layout
                  >
                     <span className="brandName">{brand.name}</span>
                  </motion.div>
               ))
            )}
         </AnimatePresence>
      </div>
   )
}
