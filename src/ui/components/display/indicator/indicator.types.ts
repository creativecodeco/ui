import type { ColorType } from '@/types';

export type IndicatorPositionType =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'middle-start'
  | 'middle-center'
  | 'middle-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

export interface IndicatorType {
  /** Target child element */
  children: React.ReactNode;
  /** Content inside the indicator badge/dot */
  content?: React.ReactNode;
  /** Color theme variant */
  color?: ColorType;
  /** Position placement relative to target element */
  position?: IndicatorPositionType;
  /** Custom CSS classes */
  className?: string;
}
