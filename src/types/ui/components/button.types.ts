import type { BadgeType, ColorButtonType, SizeType } from '@/types';
import type { IconType } from 'react-icons';
import type { PositionType } from '@/types';

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  color?: ColorButtonType;
  outline?: boolean;

  size?: SizeType;
  icon?: IconType;
  iconPosition?: PositionType;
  loading?: boolean;
  loadingLabel?: string;

  withBadge?: boolean;
  badge?: React.ReactNode;
  badgeProps?: Omit<BadgeType, 'children' | 'size'>;
}

export type ButtonRef = HTMLButtonElement;
