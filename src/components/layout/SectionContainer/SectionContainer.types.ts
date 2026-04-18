import type { SectionId } from "@/types/sections.types";

export interface SectionContainerProps {
  id: SectionId;
  children: React.ReactNode;
  label: string;
  className?: string;
  fullBleed?: boolean;
  minHeight?: string;
}
