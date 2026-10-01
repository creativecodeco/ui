import type { ColorType, ErrorType, PositionType, SizeType } from '@/types';

export interface CheckboxItemType {
  label?: string;
  checked?: boolean;
  value: string | number;
}

export interface CheckboxType extends CheckboxItemType, ErrorType {
  name: string;

  label?: string;
  checked?: boolean;

  position?: PositionType;
  color?: ColorType;

  size?: SizeType;

  disabled?: boolean;

  onChange?: (value: CheckboxItemType) => void;
}

export type CheckboxRef = HTMLInputElement;
