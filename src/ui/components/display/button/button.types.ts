import type {
  BadgeType,
  ColorButtonType,
  PositionType,
  SizeType
} from '@/types';
import type { IconType } from 'react-icons';

export type ButtonVariantType = 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
export type ButtonShapeType = 'square' | 'circle';

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  color?: ColorButtonType;
  variant?: ButtonVariantType;
  outline?: boolean;
  shape?: ButtonShapeType;
  wide?: boolean;
  block?: boolean;
  active?: boolean;

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
