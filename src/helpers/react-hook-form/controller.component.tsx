import {
  type FieldPath,
  type FieldValues,
  Controller as RHFController
} from 'react-hook-form';

import type { ControllerType } from '@/types';

const Controller = <
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
}: ControllerType<TFieldValues, TName>) => {
  const Component = Input as React.ComponentType<Record<string, unknown>>;

  return (
    <RHFController
      control={control}
      name={name}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Component
          {...field}
          isError={Boolean(error)}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};

export default Controller;
