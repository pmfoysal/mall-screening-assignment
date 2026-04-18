import { cn } from "@/lib/utils";
import "./Badge.styles.css";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "outline" | "dark" | "success" | "error";
}

export function Badge({
  className,
  variant = "gold",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    gold: "badge-gold",
    outline: "badge-outline",
    dark: "badge-dark",
    success: "badge-success",
    error: "badge-error",
  };

  return (
    <span className={cn("badge", variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
