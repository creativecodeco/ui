import type { ColorButtonType, SizeType } from '@/types';
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
}

export type ButtonRef = HTMLButtonElement;
