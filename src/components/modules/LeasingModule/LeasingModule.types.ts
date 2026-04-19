export type LeasingType = 'luxury' | 'retail' | 'fnb' | 'popup'

export interface LeasingModuleProps {
   type?: LeasingType
}

export interface LeasingConfig {
   type: LeasingType
   title: string
   tagline: string
   description: string
   highlights: string[]
   imageSrc: string
   ctaLabel: string
}
