import type { ColorType, ErrorType, PositionType, SizeType } from '@/types';

export interface RadioItemType {
  label?: string;
  value?: string | number;
}

export interface RadioType extends RadioItemType, ErrorType {
  name: string;

  label?: string;
  checked?: boolean;

  position?: PositionType;
  color?: ColorType;

  size?: SizeType;

  disabled?: boolean;

  onChange?: (value: RadioItemType) => void;
}

export type RadioRef = HTMLInputElement;

export interface RadioListType extends RadioType {
  options: Omit<RadioType, 'name'>[];
}
