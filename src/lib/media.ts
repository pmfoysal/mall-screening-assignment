// Media utility helpers

import { BLUR_DATA_URL } from './constants'

/**
 * Returns a consistent blur placeholder for Next.js Image components
 */
export function getBlurDataURL(): string {
   return BLUR_DATA_URL
}

/**
 * Builds a responsive sizes string for grid items based on column counts
 */
export function buildSizes(mobile: string, tablet: string, desktop: string): string {
   return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`
}

/**
 * Video source object helper — returns both webm and mp4 paths
 * from a base path (without extension)
 */
export function buildVideoSources(basePath: string): {
   webm: string
   mp4: string
} {
   return {
      webm: `${basePath}.webm`,
      mp4: `${basePath}.mp4`,
   }
}
