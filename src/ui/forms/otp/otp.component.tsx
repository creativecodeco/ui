import { forwardRef } from 'react';
import cls from 'classnames';

import type { OtpType } from '@/types';

const Otp = forwardRef<HTMLInputElement, OtpType>(
  (
    {
      length = 6,
      value,
      onChange,
      color,
      size = 'md',
      joined = false,
      disabled = false,
      label,
      isError,
      error,
      name,
      id,
      className
    },
    ref
  ) => {
    const slots = Array.from({ length }, (_, idx) => idx);

    return (
      <div className={cls('form-control', className)}>
        {label && (
          <label className='label' htmlFor={id}>
            <span className='label-text'>{label}</span>
          </label>
        )}
        <label
          className={cls('otp', {
            [`otp-${color}`]: Boolean(color),
            [`otp-${size}`]: Boolean(size),
            'otp-joined': joined,
            'otp-error': Boolean(isError || error)
          })}
        >
          <input
            ref={ref}
            id={id}
            name={name}
            type='text'
            inputMode='numeric'
            autoComplete='one-time-code'
            maxLength={length}
            value={value}
            disabled={disabled}
            aria-label={label ?? 'One-time password'}
            aria-invalid={Boolean(isError || error) || undefined}
            onChange={(e) => onChange?.(e.target.value)}
          />
          {slots.map((slot) => (
            <span key={slot} aria-hidden='true' />
          ))}
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

Otp.displayName = 'Otp';

export default Otp;
