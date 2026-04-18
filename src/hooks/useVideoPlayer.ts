'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaStore } from '@/store/useMediaStore'
import type { VideoPlaybackState } from '@/types/media.types'

interface UseVideoPlayerOptions {
  autoPlay?: boolean
  pauseWhenOffscreen?: boolean
  isHero?: boolean
}

interface UseVideoPlayerReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>
  state: VideoPlaybackState
  isLoaded: boolean
  retry: () => void
}

/**
 * Manages video playback state including autoplay, visibility-based pause,
 * error handling, and mute sync with global media store.
 */
export function useVideoPlayer({
  autoPlay = true,
  pauseWhenOffscreen = true,
  isHero = false,
}: UseVideoPlayerOptions = {}): UseVideoPlayerReturn {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // Initialize to "loading" immediately when autoPlay is on so the first render
  // already shows the loading skeleton (avoids a synchronous setState-in-effect).
  const [state, setState] = useState<VideoPlaybackState>(autoPlay ? 'loading' : 'idle')
  const [isLoaded, setIsLoaded] = useState(false)
  const globalMuted = useMediaStore((s) => s.globalMuted)
  const setHeroVideoLoaded = useMediaStore((s) => s.setHeroVideoLoaded)

  const retry = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    setState('loading')
    video.load()
    video.play().catch(() => setState('error'))
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      setState('playing')
      if (isHero) setHeroVideoLoaded(true)
    }

    const handleError = () => setState('error')
    const handlePlay = () => setState('playing')
    const handlePause = () => setState('paused')
    const handleWaiting = () => setState('loading')

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('waiting', handleWaiting)

    if (autoPlay) {
      video.play().catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'NotAllowedError') {
          // Autoplay blocked by browser policy — expected on mobile/strict browsers.
          // Keep idle so the poster image shows; user interaction will enable play.
          setState('idle')
        } else if (err instanceof DOMException && err.name === 'AbortError') {
          // play() was interrupted by a subsequent call — safe to ignore.
        } else {
          // Genuine playback failure not already caught by the 'error' event.
          setState('error')
        }
      })
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('waiting', handleWaiting)
    }
  }, [autoPlay, isHero, setHeroVideoLoaded])

  // Sync mute state with global store
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = globalMuted
  }, [globalMuted])

  // Pause/resume based on visibility
  useEffect(() => {
    if (!pauseWhenOffscreen) return
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [pauseWhenOffscreen])

  return { videoRef, state, isLoaded, retry }
}
