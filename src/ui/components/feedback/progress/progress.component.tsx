import cls from 'classnames';

import type { ProgressType } from '@/types';

const Progress = ({
  value,
  max = 100,
  color,
  size,
  className
}: ProgressType) => {
  return (
    <progress
      value={value}
      max={max}
      aria-label='Progress'
      className={cls(
        'progress w-full',
        {
          [`progress-${color}`]: Boolean(color),
          [`progress-${size}`]: Boolean(size)
        },
        className
      )}
    />
  );
};

export default Progress;
