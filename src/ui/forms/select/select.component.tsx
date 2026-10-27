import { forwardRef } from 'react';
import cls from 'classnames';

import type { SelectType } from '@/types';

const Select = forwardRef<HTMLSelectElement, SelectType>(
  (
    {
      options = [],
      value,
      defaultValue,
      placeholder,
      label,
      onChange,
      color,
      size = 'md',
      ghost = false,
      disabled = false,
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
        <select
          ref={ref}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={Boolean(isError || error) || undefined}
          className={cls('select w-full', {
            [`select-${color}`]: Boolean(color),
            [`select-${size}`]: Boolean(size),
            'select-ghost': ghost,
            'select-error': Boolean(isError || error)
          })}
        >
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <span role='alert' className='text-xs text-error mt-1'>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
