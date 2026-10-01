import type { ColorType } from '@/types';

export interface DividerType {
  children?: React.ReactNode;
  vertical?: boolean;
  color?: ColorType;
  position?: 'start' | 'center' | 'end';
  className?: string;
}
