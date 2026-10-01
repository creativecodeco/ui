import cls from 'classnames';

import type { RangeType } from '@/types';

const Range = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  color,
  size = 'md',
  disabled,
  error,
  name,
  id,
  className
}: RangeType) => {
  return (
    <div className={cls('form-control w-full', className)}>
      {label && (
        <label className='label' htmlFor={id}>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type='range'
        id={id}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cls('range', {
          [`range-${color}`]: Boolean(color),
          [`range-${size}`]: Boolean(size),
          'range-error': Boolean(error)
        })}
      />
      {error && <span className='text-xs text-error mt-1'>{error}</span>}
    </div>
  );
};

export default Range;
