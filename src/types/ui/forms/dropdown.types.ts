import { TextBoxType } from './text-box.types';

export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownType extends TextBoxType {
  options?: DropdownOption[];
  onChange?: (option: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange?: (text?: string) => void;
}
