import type { ColorType, SizeType } from '@/types';

export interface CountdownType {
  /** Numeric value for countdown (0-99+) */
  value: number;
  /** Optional label below or beside the countdown number */
  label?: string;
  /** Size variant */
  size?: SizeType;
  /** Color variant */
  color?: ColorType;
  /** Custom CSS classes */
  className?: string;
}
