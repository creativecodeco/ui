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
      className={cls(
        'progress',
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
