import type { ColorType } from '@/types';

export type ToastPositionType =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

export interface ToastType {
  children: React.ReactNode;
  position?: ToastPositionType;
  color?: ColorType;
}
