import type { ColorType } from '@/types';

export interface TooltipType {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: ColorType;
  open?: boolean;
}
