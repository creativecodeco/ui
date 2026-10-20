import cls from 'classnames';

import type { OtpType } from '@/types';

const Otp = ({
  length = 6,
  value,
  onChange,
  color,
  size = 'md',
  joined = false,
  disabled = false,
  label,
  error,
  name,
  id,
  className
}: OtpType) => {
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
          'otp-error': Boolean(error)
        })}
      >
        <input
          id={id}
          name={name}
          type='text'
          inputMode='numeric'
          maxLength={length}
          value={value}
          disabled={disabled}
          aria-label={label ?? 'One-time password'}
          onChange={(e) => onChange?.(e.target.value)}
        />
        {slots.map((slot) => (
          <span key={slot} aria-hidden='true' />
        ))}
      </label>
      {error && <span className='text-xs text-error mt-1'>{error}</span>}
    </div>
  );
};

export default Otp;
