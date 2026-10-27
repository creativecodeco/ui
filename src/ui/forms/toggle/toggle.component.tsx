import { forwardRef } from 'react';
import cls from 'classnames';

import type { ToggleType } from '@/types';

const Toggle = forwardRef<HTMLInputElement, ToggleType>(
  (
    {
      checked,
      onChange,
      label,
      position = 'left',
      color,
      size = 'md',
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
      <div className='form-control'>
        <label
          className='label cursor-pointer justify-start gap-3'
          htmlFor={id}
        >
          {label && position === 'left' && (
            <span className='label-text'>{label}</span>
          )}
          <input
            ref={ref}
            type='checkbox'
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            readOnly={checked !== undefined && !onChange}
            disabled={disabled}
            aria-invalid={Boolean(isError || error) || undefined}
            className={cls('toggle', className, {
              [`toggle-${color}`]: color,
              'toggle-xs': size === 'xs',
              'toggle-sm': size === 'sm',
              'toggle-md': size === 'md',
              'toggle-lg': size === 'lg',
              'toggle-error': Boolean(isError || error)
            })}
          />
          {label && position === 'right' && (
            <span className='label-text'>{label}</span>
          )}
        </label>
        {error && (
          <span role='alert' className='text-xs text-error mt-1'>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
