export interface AnimatedCounterProps {
  target: number // The numeric target value
  prefix?: string // e.g. "$"
  suffix?: string // e.g. "M+" or "+"
  duration?: number // ms
  delay?: number // ms
  className?: string
  label?: string // aria-label override
}
