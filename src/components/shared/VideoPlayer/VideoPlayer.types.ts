export interface VideoPlayerProps {
   mp4Src?: string
   webmSrc?: string
   posterSrc?: string
   fallbackImageSrc?: string
   autoPlay?: boolean
   loop?: boolean
   priority?: boolean
   pauseWhenOffscreen?: boolean
   isHero?: boolean
   className?: string
   overlayClassName?: string
   showControls?: boolean
   'aria-label'?: string
}
