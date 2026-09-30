import type { ColorType, SizeType } from '@/types';

export interface FileInputType extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: string;
  error?: string;
  color?: ColorType;
  size?: SizeType;
  bordered?: boolean;
}
