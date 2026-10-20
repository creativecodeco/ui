import cls from 'classnames';

import type { FilterType } from '@/types';

const Filter = ({
  name,
  options = [],
  value,
  onChange,
  resetLabel = 'All',
  size = 'md',
  className
}: FilterType) => {
  return (
    <div className={cls('filter', className)} role='radiogroup'>
      <input
        type='radio'
        name={name}
        aria-label={resetLabel}
        checked={!value}
        onChange={() => onChange?.('')}
        className={cls('btn filter-reset', {
          [`btn-${size}`]: Boolean(size)
        })}
      />
      {options.map((opt) => (
        <input
          key={opt.value}
          type='radio'
          name={name}
          aria-label={opt.label}
          checked={value === opt.value}
          onChange={() => onChange?.(opt.value)}
          className={cls('btn', {
            [`btn-${size}`]: Boolean(size)
          })}
        />
      ))}
    </div>
  );
};

export default Filter;
