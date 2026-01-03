import type { IconType } from 'react-icons';
import type { ColorType, ErrorType, SizeType } from '@/types';

export interface TextBoxType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    ErrorType {
  name: string;

  label?: string;

  disabled?: boolean;

  size?: SizeType;
  color?: ColorType;

  leftIcon?: IconType;
  rightIcon?: IconType;
  rightButton?: boolean;
}

export type TextBoxRef = HTMLInputElement;
