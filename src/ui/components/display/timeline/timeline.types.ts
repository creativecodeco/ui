import type { ColorType } from '@/types';

export interface TimelineItemType {
  id?: string | number;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  date?: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  color?: ColorType;
}

export interface TimelineType {
  /** Array of timeline item entries */
  items: TimelineItemType[];
  /** Layout direction (vertical or horizontal) */
  vertical?: boolean;
  /** Compact density layout */
  compact?: boolean;
  /** Custom CSS classes */
  className?: string;
}
