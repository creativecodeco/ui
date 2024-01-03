import type { IconType } from 'react-icons';
import { SizeType } from '@/types';

export interface TextBoxType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;

  label?: string;

  isError?: boolean;
  error?: string;

  disabled?: boolean;

  size?: SizeType;

  leftIcon?: IconType;
  rightIcon?: IconType;
  rightButton?: boolean;
}

export type TextBoxRef = HTMLInputElement;
