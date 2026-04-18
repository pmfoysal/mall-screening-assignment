import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes, resolving conflicts intelligently.
 * Usage: cn('base-class', condition && 'conditional-class', 'override-class')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
