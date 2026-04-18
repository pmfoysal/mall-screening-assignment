// Media type definitions

export interface VideoSource {
  webm?: string;
  mp4?: string;
  poster?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export type VideoPlaybackState =
  | "idle"
  | "loading"
  | "playing"
  | "paused"
  | "error";

export interface MediaState {
  globalMuted: boolean;
  heroVideoLoaded: boolean;
  setMuted: (muted: boolean) => void;
  setHeroVideoLoaded: (loaded: boolean) => void;
}
