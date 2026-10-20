import type { ColorType } from '@/types';

export interface RadialProgressType {
  /** Progress value between 0 and 100 */
  value: number;
  /** Diameter size (e.g., '5rem', '8rem') */
  size?: string;
  /** Ring thickness (e.g., '0.5rem', '4px') */
  thickness?: string;
  /** Semantic color variant */
  color?: ColorType;
  /** Custom inner content (defaults to `${value}%`) */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
