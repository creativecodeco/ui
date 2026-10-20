import type { ColorType } from '@/types';

export interface CalendarType {
  /** Selected date in YYYY-MM-DD format */
  value?: string;
  /** Callback fired when a date is selected (YYYY-MM-DD) */
  onChange?: (date: string) => void;
  /** Minimum selectable date (YYYY-MM-DD) */
  minDate?: string;
  /** Maximum selectable date (YYYY-MM-DD) */
  maxDate?: string;
  /** Semantic color variant for the selected date */
  color?: ColorType;
  /** Custom CSS classes */
  className?: string;
}
