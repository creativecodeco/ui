import React from 'react';
import { TextBoxType } from './text-box.types';

export interface DropDownOption {
  value: string | number;
  label: string;
}

export interface DropDownType extends TextBoxType {
  options?: DropDownOption[];
  onChange?: (option: React.ChangeEvent<HTMLInputElement>) => void;
}
