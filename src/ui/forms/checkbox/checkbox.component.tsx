import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { CheckboxItemType, CheckboxRef, CheckboxType } from '@/types';

const Checkbox = forwardRef<CheckboxRef, CheckboxType>(
  (
    {
      name,
      label,
      isError,
      disabled,
      error,
      position = 'left',
      color,
      size = 'md',
      checked,
      value,
      onChange,
      ...otherProps
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.({
        isChecked: e.target.checked,
        value,
        label
      } as CheckboxItemType);
    };

    const checkbox = () => (
      <input
        id={name}
        name={name}
        data-testid={name}
        ref={ref}
        type='checkbox'
        className={cls('checkbox', {
          [`checkbox-color-${color}`]: color,
          [`checkbox-size-${size}`]: size
        })}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        {...otherProps}
      />
    );

    return (
      <label
        className={cls('label', {
          'cursor-pointer': !disabled,
          'cursor-not-allowed': disabled
        })}
        htmlFor={name}
      >
        {position === 'left' && checkbox()}
        {label && <span className='label-text'>{label}</span>}
        {position === 'right' && checkbox()}
        {isError && <p className='text-red-500'>{error}</p>}
      </label>
    );
  }
);

export default Checkbox;
