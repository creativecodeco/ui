import type {
  FieldPath,
  FieldValues,
  ControllerProps as RHFControllerProps
} from 'react-hook-form';

import { TextBox } from '@/ui/forms';

type TextBoxType = {
  as: typeof TextBox;
} & React.ComponentProps<typeof TextBox>;

type Inputs = TextBoxType;

export type ControllerType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<RHFControllerProps<TFieldValues, TName>, 'render'> & Inputs;
