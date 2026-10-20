import cls from 'classnames';

import type { SelectType } from '@/types';

const Select = ({
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
  error,
  name,
  id,
  className
}: SelectType) => {
  return (
    <div className={cls('form-control w-full', className)}>
      {label && (
        <label className='label' htmlFor={id}>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={cls('select w-full', {
          [`select-${color}`]: Boolean(color),
          [`select-${size}`]: Boolean(size),
          'select-ghost': ghost,
          'select-error': Boolean(error)
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
      {error && <span className='text-xs text-error mt-1'>{error}</span>}
    </div>
  );
};

export default Select;
