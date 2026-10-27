import cls from 'classnames';

import type { SwapType } from '@/types';

const Swap = ({
  onContent,
  offContent,
  indeterminateContent,
  active,
  onChange,
  effect,
  disabled,
  className
}: SwapType) => {
  return (
    <label
      className={cls(
        'swap',
        {
          'swap-active': active !== undefined && active,
          [`swap-${effect}`]: Boolean(effect)
        },
        className
      )}
    >
      <input
        type='checkbox'
        aria-label='Toggle swap state'
        checked={active}
        onChange={onChange}
        readOnly={active !== undefined && !onChange}
        disabled={disabled}
      />
      <div className='swap-on'>{onContent}</div>
      <div className='swap-off'>{offContent}</div>
      {indeterminateContent && (
        <div className='swap-indeterminate'>{indeterminateContent}</div>
      )}
    </label>
  );
};

export default Swap;
