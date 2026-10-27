import type { ColorType, ErrorType, SizeType } from '@/types';

export interface RangeType extends ErrorType {
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
  /** Vertical orientation */
  vertical?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Custom CSS classes */
  className?: string;
}
