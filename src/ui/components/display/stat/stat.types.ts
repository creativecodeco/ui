import type { ColorType } from '@/types';
import type { IconType } from 'react-icons';

export interface StatType {
  title?: React.ReactNode;
  value: React.ReactNode;
  description?: React.ReactNode;
  icon?: IconType;
  color?: ColorType;
  className?: string;
}
