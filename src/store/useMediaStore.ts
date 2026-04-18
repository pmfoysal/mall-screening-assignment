import { create } from "zustand";
import type { MediaState } from "@/types/media.types";

export const useMediaStore = create<MediaState>()((set) => ({
  globalMuted: true,
  heroVideoLoaded: false,

  setMuted: (muted: boolean) => set({ globalMuted: muted }),

  setHeroVideoLoaded: (loaded: boolean) => set({ heroVideoLoaded: loaded }),
}));
