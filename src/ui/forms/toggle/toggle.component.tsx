import cls from 'classnames';

import type { ToggleType } from '@/types';

const Toggle = ({
  checked,
  onChange,
  label,
  position = 'left',
  color,
  size = 'md',
  disabled,
  error,
  name,
  id
}: ToggleType) => {
  return (
    <div className='form-control'>
      <label className='label cursor-pointer justify-start gap-3'>
        {label && position === 'left' && (
          <span className='label-text'>{label}</span>
        )}
        <input
          type='checkbox'
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={cls('toggle', {
            [`toggle-${color}`]: color,
            'toggle-xs': size === 'xs',
            'toggle-sm': size === 'sm',
            'toggle-md': size === 'md',
            'toggle-lg': size === 'lg',
            'toggle-error': Boolean(error)
          })}
        />
        {label && position === 'right' && (
          <span className='label-text'>{label}</span>
        )}
      </label>
      {error && <span className='text-xs text-error mt-1'>{error}</span>}
    </div>
  );
};

export default Toggle;
