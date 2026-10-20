import cls from 'classnames';

import type { RadialProgressType } from '@/types';

const RadialProgress = ({
  value,
  size,
  thickness,
  color,
  children,
  className
}: RadialProgressType) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  const style: React.CSSProperties & Record<string, string | number> = {
    '--value': clampedValue
  };

  if (size) {
    style['--size'] = size;
  }

  if (thickness) {
    style['--thickness'] = thickness;
  }

  return (
    <div
      role='progressbar'
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      style={style}
      className={cls(
        'radial-progress',
        {
          [`text-${color}`]: Boolean(color)
        },
        className
      )}
    >
      {children ?? `${clampedValue}%`}
    </div>
  );
};

export default RadialProgress;
