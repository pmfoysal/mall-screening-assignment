'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'
import './Tooltip.styles.css'

interface TooltipProps {
   children: React.ReactNode
   content: React.ReactNode
   side?: 'top' | 'right' | 'bottom' | 'left'
   className?: string
}

/**
 * A single TooltipProvider must wrap the app so all tooltip instances
 * share the same hover-delay state. Add <TooltipProvider> once in the layout
 * (e.g. inside ThemeProvider) rather than per-instance.
 */
export function TooltipProvider({ children }: { children: React.ReactNode }) {
   return <TooltipPrimitive.Provider delayDuration={200}>{children}</TooltipPrimitive.Provider>
}

export function Tooltip({ children, content, side = 'top', className }: TooltipProps) {
   return (
      <TooltipPrimitive.Root>
         <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
         <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content side={side} sideOffset={6} className={cn('tooltip-content', className)}>
               {content}
               <TooltipPrimitive.Arrow className="tooltip-arrow" />
            </TooltipPrimitive.Content>
         </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
   )
}
