export interface TextBoxType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;

  isError?: boolean;
  error?: string;

  label?: string;
}

export type TextBoxRef = HTMLInputElement;
