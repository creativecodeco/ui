import type { ColorType } from '@/types';

export type TooltipPositionType =
  'top' | 'bottom' | 'left' | 'right' | 'start' | 'center' | 'end';

export interface TooltipType {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPositionType;
  color?: ColorType;
  open?: boolean;
  className?: string;
}
