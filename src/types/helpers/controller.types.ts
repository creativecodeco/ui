import type {
  FieldPath,
  FieldValues,
  ControllerProps as RHFControllerProps
} from 'react-hook-form';

import type {
  Checkbox,
  Dropdown,
  FileInput,
  Otp,
  Radio,
  RadioList,
  Range,
  Select,
  TextArea,
  TextBox,
  Toggle
} from '@/ui/forms';

type FormControlComponent =
  | typeof TextBox
  | typeof Dropdown
  | typeof Select
  | typeof TextArea
  | typeof Checkbox
  | typeof Radio
  | typeof RadioList
  | typeof Toggle
  | typeof Range
  | typeof FileInput
  | typeof Otp;

type Inputs = {
  [K in FormControlComponent as string]: {
    as: K;
  } & React.ComponentProps<K>;
}[string];

export type ControllerType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<RHFControllerProps<TFieldValues, TName>, 'render'> & Inputs;
