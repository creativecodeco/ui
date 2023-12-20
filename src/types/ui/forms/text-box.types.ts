export interface TextBoxType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;

  label?: string;

  isError?: boolean;
  error?: string;

  disabled?: boolean;
}

export type TextBoxRef = HTMLInputElement;
