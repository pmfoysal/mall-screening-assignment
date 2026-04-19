export interface StatCardProps {
   value: string
   label: string
   numericValue?: number
   prefix?: string
   suffix?: string
   icon?: string
   delay?: number
   theme?: 'light' | 'dark'
   className?: string
}
