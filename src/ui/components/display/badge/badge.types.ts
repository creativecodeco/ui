import type { ColorType, PositionType, SizeType } from '@/types';
import type { IconType } from 'react-icons';

export interface BadgeType {
  children: React.ReactNode;

  color?: ColorType;
  outline?: boolean;
  size?: SizeType;
  icon?: IconType;
  iconPosition?: PositionType;
}
