import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { CheckboxRef, CheckboxType } from '@/types';

const Checkbox = forwardRef<CheckboxRef, CheckboxType>(
  (
    {
      name,
      label,
      isError,
      checked,
      disabled,
      error,
      position = 'left',
      color,
      size = 'md',
      ...otherProps
    },
    ref
  ) => {
    const checkbox = () => (
      <input
        id={name}
        name={name}
        data-testid={name}
        ref={ref}
        type='checkbox'
        checked={checked}
        className={cls('checkbox', {
          [`checkbox-color-${color}`]: color,
          [`checkbox-size-${size}`]: size
        })}
        disabled={disabled}
        {...otherProps}
      />
    );

    return (
      <>
        <label
          className={cls('label', {
            'cursor-pointer': !disabled,
            'cursor-not-allowed': disabled
          })}
        >
          {position === 'left' && checkbox()}
          {label && <span className='label-text'>{label}</span>}
          {position === 'right' && checkbox()}
        </label>
        {isError && <p className='text-red-500'>{error}</p>}
      </>
    );
  }
);

export default Checkbox;
