// Global shared types used across the entire application

export type ThemeValue = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

// Make all nested props optional for config overrides
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Extract config type from data array
export type ArrayElement<T extends readonly unknown[]> =
  T extends readonly (infer U)[] ? U : never;

export type WithChildren<T = Record<string, never>> = T & {
  children: React.ReactNode;
};

export type WithClassName<T = Record<string, never>> = T & {
  className?: string;
};
