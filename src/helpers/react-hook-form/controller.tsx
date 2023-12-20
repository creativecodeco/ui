import {
  type FieldPath,
  type FieldValues,
  Controller as RHFController
} from 'react-hook-form';

import { ControllerType } from '@/types/helpers/controller.types';

export default function Controller<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  as: Input,
  defaultValue,
  shouldUnregister,
  rules,
  ...rest
}: ControllerType<TFieldValues, TName>) {
  return (
    <RHFController
      control={control}
      name={name}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          isError={!!error}
          error={!!error}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(rest as any)}
        />
      )}
    />
  );
}
