import type { ColorType, SizeType } from '@/types';

export interface RangeType {
  /** Current range value */
  value?: number;
  /** Minimum range value */
  min?: number;
  /** Maximum range value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Callback fired on change */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional label */
  label?: string;
  /** Color theme variant */
  color?: ColorType;
  /** Size variant */
  size?: SizeType;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Custom CSS classes */
  className?: string;
}
