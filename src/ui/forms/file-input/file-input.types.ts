import type { ColorType, ErrorType, SizeType } from '@/types';

export interface FileInputType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, ErrorType {
  label?: string;
  color?: ColorType;
  size?: SizeType;
  bordered?: boolean;
  ghost?: boolean;
}
