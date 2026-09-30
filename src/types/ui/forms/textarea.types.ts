import type { ColorType, SizeType } from '@/types';

export interface TextAreaType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  color?: ColorType;
  size?: SizeType;
  bordered?: boolean;
}
