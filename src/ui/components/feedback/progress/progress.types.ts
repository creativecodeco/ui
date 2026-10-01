import type { ColorType, SizeType } from '@/types';

export interface ProgressType {
  /** Current progress value (if omitted, progress becomes indeterminate) */
  value?: number;
  /** Maximum progress value */
  max?: number;
  /** Color theme variant */
  color?: ColorType;
  /** Size variant */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
