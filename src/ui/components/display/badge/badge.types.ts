import type { ColorButtonType, PositionType, SizeType } from '@/types';
import type { IconType } from 'react-icons';

export type BadgeVariantType = 'outline' | 'dash' | 'soft' | 'ghost';

export interface BadgeType {
  children: React.ReactNode;

  color?: ColorButtonType;
  variant?: BadgeVariantType;
  outline?: boolean;
  size?: SizeType;
  icon?: IconType;
  iconPosition?: PositionType;
  className?: string;
}
