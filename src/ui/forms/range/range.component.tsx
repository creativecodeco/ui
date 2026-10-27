import { forwardRef } from 'react';
import cls from 'classnames';

import type { RangeType } from '@/types';

const Range = forwardRef<HTMLInputElement, RangeType>(
  (
    {
      value,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      label,
      color,
      size = 'md',
      vertical = false,
      disabled,
      isError,
      error,
      name,
      id,
      className
    },
    ref
  ) => {
    return (
      <div className={cls('form-control w-full', className)}>
        {label && (
          <label className='label' htmlFor={id}>
            <span className='label-text'>{label}</span>
          </label>
        )}
        <input
          ref={ref}
          type='range'
          id={id}
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          readOnly={value !== undefined && !onChange}
          disabled={disabled}
          aria-invalid={Boolean(isError || error) || undefined}
          className={cls('range', {
            [`range-${color}`]: Boolean(color),
            [`range-${size}`]: Boolean(size),
            'range-vertical': vertical,
            'range-error': Boolean(isError || error)
          })}
        />
        {error && (
          <span role='alert' className='text-xs text-error mt-1'>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Range.displayName = 'Range';

export default Range;
