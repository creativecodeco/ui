import cls from 'classnames';

import type { SwapType } from '@/types';

const Swap = ({
  onContent,
  offContent,
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
        checked={active}
        onChange={onChange}
        disabled={disabled}
      />
      <div className='swap-on'>{onContent}</div>
      <div className='swap-off'>{offContent}</div>
    </label>
  );
};

export default Swap;
