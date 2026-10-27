import type { ColorType, ErrorType, SizeType } from '@/types';

export interface TextAreaType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, ErrorType {
  label?: string;
  color?: ColorType;
  size?: SizeType;
  bordered?: boolean;
  ghost?: boolean;
}
