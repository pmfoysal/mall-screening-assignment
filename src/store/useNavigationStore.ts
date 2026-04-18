import { create } from "zustand";
import type { NavigationState } from "@/types/navigation.types";
import type { SectionId } from "@/types/sections.types";

export const useNavigationStore = create<NavigationState>()((set) => ({
  activeSection: null,
  isMobileMenuOpen: false,
  isNavTransparent: true,

  setActiveSection: (id: SectionId | null) => set({ activeSection: id }),

  setMobileMenuOpen: (open: boolean) => set({ isMobileMenuOpen: open }),

  setNavTransparent: (transparent: boolean) =>
    set({ isNavTransparent: transparent }),
}));
