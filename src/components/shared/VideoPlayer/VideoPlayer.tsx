'use client'

import Image from 'next/image'
import { Volume2, VolumeX, RefreshCw } from 'lucide-react'
import { useVideoPlayer } from '@/hooks/useVideoPlayer'
import { useMediaStore } from '@/store/useMediaStore'
import { Skeleton } from '@/components/ui/Skeleton'
import { cn } from '@/lib/utils'
import { BLUR_DATA_URL } from '@/lib/constants'
import './VideoPlayer.styles.css'
import type { VideoPlayerProps } from './VideoPlayer.types'

/**
 * Cinematic video player component with full state management:
 * loading → playing → error states, mute toggle, and fallback image.
 * Background videos are aria-hidden (decorative).
 */
export function VideoPlayer({
   mp4Src,
   webmSrc,
   posterSrc,
   fallbackImageSrc,
   autoPlay = true,
   loop = true,
   priority = false,
   pauseWhenOffscreen = true,
   isHero = false,
   className,
   overlayClassName,
   showControls = false,
   'aria-label': ariaLabel,
}: VideoPlayerProps) {
   const { videoRef, state, retry } = useVideoPlayer({
      autoPlay,
      pauseWhenOffscreen,
      isHero,
   })
   const { globalMuted, setMuted } = useMediaStore()

   const hasVideoSource = mp4Src || webmSrc

   if (!hasVideoSource) {
      // No video source: show fallback image or skeleton
      if (fallbackImageSrc) {
         return (
            <div className={cn('videoContainer', className)}>
               <Image
                  src={fallbackImageSrc}
                  alt={ariaLabel ?? 'Background image'}
                  fill
                  priority={priority}
                  sizes="100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
               />
               {overlayClassName && <div className={cn('absolute inset-0', overlayClassName)} />}
            </div>
         )
      }
      return <div className={cn('videoContainer skeleton-shimmer', className)} aria-hidden="true" />
   }

   return (
      <div
         className={cn('videoContainer', className)}
         aria-hidden={!showControls ? true : undefined}
         role={!showControls ? 'presentation' : undefined}
      >
         {/* Loading skeleton */}
         {state === 'loading' && <Skeleton className="videoSkeleton" rounded="sm" />}

         {/* Error fallback */}
         {state === 'error' && (
            <div className="videoErrorState" role="alert">
               {fallbackImageSrc ? (
                  <Image
                     src={fallbackImageSrc}
                     alt={ariaLabel ?? 'Video unavailable'}
                     fill
                     sizes="100vw"
                     className="object-cover opacity-50"
                     placeholder="blur"
                     blurDataURL={BLUR_DATA_URL}
                  />
               ) : (
                  <>
                     <RefreshCw size={32} className="videoErrorIcon" aria-hidden="true" />
                     <span className="videoErrorMessage">Video unavailable</span>
                     <button className="videoRetryButton" onClick={retry} type="button">
                        Retry
                     </button>
                  </>
               )}
            </div>
         )}

         {/* Video element */}
         <video
            ref={videoRef}
            className={cn('videoElement', state === 'loading' ? 'videoLoading' : 'videoLoaded')}
            autoPlay={autoPlay}
            muted
            loop={loop}
            playsInline
            poster={posterSrc}
            preload={priority ? 'auto' : 'none'}
            aria-label={showControls ? ariaLabel : undefined}
         >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            {mp4Src && <source src={mp4Src} type="video/mp4" />}
         </video>

         {/* Optional overlay */}
         {overlayClassName && (
            <div className={cn('absolute inset-0 pointer-events-none', overlayClassName)} aria-hidden="true" />
         )}

         {/* Mute toggle */}
         {showControls && (
            <button
               className="videoMuteToggle"
               onClick={() => setMuted(!globalMuted)}
               aria-label={globalMuted ? 'Unmute video' : 'Mute video'}
               type="button"
            >
               {globalMuted ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
            </button>
         )}
      </div>
   )
}
