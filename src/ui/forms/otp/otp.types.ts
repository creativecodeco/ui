import type { ColorType, SizeType } from '@/types';

export interface OtpType {
  /** Number of OTP character slots */
  length?: number;
  /** Controlled OTP string value */
  value?: string;
  /** Callback fired when OTP value changes */
  onChange?: (value: string) => void;
  /** Color variant */
  color?: ColorType | 'neutral';
  /** Size variant */
  size?: SizeType;
  /** Join character slots together without gap */
  joined?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Optional field label */
  label?: string;
  /** Error message */
  error?: string;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Custom CSS classes */
  className?: string;
}
