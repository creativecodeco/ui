import cls from 'classnames';

import type { SpinnerType } from '@/types';

const Spinner = ({
  size = 'md',
  color,
  variant = 'spinner',
  className
}: SpinnerType) => {
  return (
    <span
      role='status'
      aria-label='loading'
      className={cls('loading', className, {
        'loading-spinner': variant === 'spinner',
        'loading-dots': variant === 'dots',
        'loading-ring': variant === 'ring',
        'loading-ball': variant === 'ball',
        'loading-bars': variant === 'bars',
        'loading-infinity': variant === 'infinity',
        'loading-xs': size === 'xs',
        'loading-sm': size === 'sm',
        'loading-md': size === 'md',
        'loading-lg': size === 'lg',
        [`text-${color}`]: color
      })}
    />
  );
};

export default Spinner;
