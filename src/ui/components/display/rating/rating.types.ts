import type { ColorType, SizeType } from '@/types';

export interface RatingType {
  /** Current rating value (1 to max) */
  value?: number;
  /** Total number of rating stars/items (default: 5) */
  max?: number;
  /** Callback fired when rating value changes */
  onChange?: (value: number) => void;
  /** Color theme variant */
  color?: ColorType;
  /** Size variant */
  size?: SizeType;
  /** Enable half-item precision */
  half?: boolean;
  /** Mask shape (star, star-2, heart) */
  shape?: 'star' | 'star-2' | 'heart';
  /** Disabled state */
  disabled?: boolean;
  /** Readonly state */
  readonly?: boolean;
  /** Name attribute for the radio group */
  name?: string;
  /** Custom CSS classes */
  className?: string;
}
