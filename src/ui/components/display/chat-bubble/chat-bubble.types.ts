import type { ColorType } from '@/types';

export interface ChatBubbleType {
  /** Message text or element */
  message: React.ReactNode;
  /** Alignment position (start = left, end = right) */
  position?: 'start' | 'end';
  /** Bubble color variant */
  color?: ColorType;
  /** Avatar image URL or element */
  avatar?: string | React.ReactNode;
  /** Header label (sender name) */
  header?: React.ReactNode;
  /** Timestamp text */
  time?: React.ReactNode;
  /** Footer label (status, e.g., 'Delivered') */
  footer?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
