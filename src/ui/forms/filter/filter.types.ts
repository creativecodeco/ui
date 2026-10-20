import type { SizeType } from '@/types';

export interface FilterOptionType {
  /** Option value */
  value: string;
  /** Option button label */
  label: string;
}

export interface FilterType {
  /** Radio group name */
  name: string;
  /** Array of filter options */
  options: FilterOptionType[];
  /** Currently selected filter value */
  value?: string;
  /** Callback fired when selection changes or resets */
  onChange?: (value: string) => void;
  /**Accessible label for the reset button */
  resetLabel?: string;
  /** Button size variant */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
