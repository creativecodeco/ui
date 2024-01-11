import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RadioRef, RadioItemType, RadioType } from '@/types';

const Radio = forwardRef<RadioRef, RadioType>(
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
      } as RadioItemType);
    };

    const radio = () => (
      <input
        ref={ref}
        id={name}
        name={name}
        data-testid={name}
        type='radio'
        className={cls('radio', {
          [`radio-color-${color}`]: color,
          [`radio-size-${size}`]: size
        })}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        {...otherProps}
      />
    );

    return (
      <>
        <label
          className={cls('label justify-start gap-3', {
            'cursor-pointer': !disabled,
            'cursor-not-allowed': disabled
          })}
        >
          {position === 'left' && radio()}
          {label && <span className='label-text'>{label}</span>}
          {position === 'right' && radio()}
        </label>
        {isError && <p className='text-red-500'>{error}</p>}
      </>
    );
  }
);

export default Radio;
