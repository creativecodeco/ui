import type { ColorType, SizeType } from '@/types';

export interface SpinnerType {
  size?: SizeType;
  color?: ColorType;
  variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  className?: string;
}
