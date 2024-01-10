import type { ErrorType, SizeType } from '@/types';

export interface CheckboxType extends ErrorType {
  name: string;

  label?: string;
  checked?: boolean;

  position?: 'left' | 'right';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'info'
    | 'error';

  size?: SizeType;

  disabled?: boolean;
}

export type CheckboxRef = HTMLInputElement;
