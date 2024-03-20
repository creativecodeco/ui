import type { ColorType, SizeType } from '@/types';
import type { IconType } from 'react-icons';
import type { PositionType } from '@/types';

export interface BadgeType {
  children: React.ReactNode;

  color?: ColorType;
  outline?: boolean;
  size?: SizeType;
  icon?: IconType;
  iconPosition?: PositionType;
}
