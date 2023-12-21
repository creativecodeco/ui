import type { IconType } from 'react-icons';

export interface TextBoxType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;

  label?: string;

  isError?: boolean;
  error?: string;

  disabled?: boolean;

  size?: 'xs' | 'sm' | 'md' | 'lg';

  leftIcon?: IconType;
  rightIcon?: IconType;
  rightButton?: boolean;
}

export type TextBoxRef = HTMLInputElement;
