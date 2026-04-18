export interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark" | "auto";
  titleSize?: "xl" | "lg" | "md";
  className?: string;
  animate?: boolean;
}
