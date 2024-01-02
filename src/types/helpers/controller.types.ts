import type {
  FieldPath,
  FieldValues,
  ControllerProps as RHFControllerProps
} from 'react-hook-form';

import { DropDown, TextBox } from '@/ui/forms';

type TextBoxType = {
  as: typeof TextBox;
} & React.ComponentProps<typeof TextBox>;

type DropDownType = {
  as: typeof DropDown;
} & React.ComponentProps<typeof DropDown>;

type Inputs = TextBoxType | DropDownType;

export type ControllerType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<RHFControllerProps<TFieldValues, TName>, 'render'> & Inputs;
