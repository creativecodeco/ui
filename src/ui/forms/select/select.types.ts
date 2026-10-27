import type { ColorType, ErrorType, SizeType } from '@/types';

export interface SelectOptionType {
  /** Option value */
  value: string | number;
  /** Option display label */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SelectType extends ErrorType {
  /** Select options */
  options?: SelectOptionType[];
  /** Currently selected value */
  value?: string | number;
  /** Default value when uncontrolled */
  defaultValue?: string | number;
  /** Placeholder text shown as the first disabled option */
  placeholder?: string;
  /** Field label */
  label?: string;
  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Semantic color variant */
  color?: ColorType | 'neutral';
  /** Size variant */
  size?: SizeType;
  /** Ghost style without background */
  ghost?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Select name attribute */
  name?: string;
  /** Select id attribute */
  id?: string;
  /** Custom CSS classes */
  className?: string;
}
