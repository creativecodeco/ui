export interface TextBoxType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;

  label?: string;

  isError?: boolean;
  error?: string;

  disabled?: boolean;

  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export type TextBoxRef = HTMLInputElement;
