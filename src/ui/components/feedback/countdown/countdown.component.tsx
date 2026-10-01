import cls from 'classnames';

import type { CountdownType } from '@/types';

const Countdown = ({
  value,
  label,
  size = 'md',
  color,
  className
}: CountdownType) => {
  const style = { '--value': Math.max(0, value) } as React.CSSProperties;

  return (
    <div
      className={cls(
        'inline-flex flex-col items-center justify-center text-center',
        className
      )}
    >
      <span
        className={cls('countdown font-mono', {
          'text-sm': size === 'xs',
          'text-base': size === 'sm',
          'text-2xl': size === 'md',
          'text-4xl font-bold': size === 'lg',
          [`text-${color}`]: Boolean(color)
        })}
      >
        <span style={style} aria-label={`${value}`} />
      </span>
      {label && (
        <span
          className={cls('text-xs opacity-75 mt-1', {
            [`text-${color}`]: Boolean(color)
          })}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Countdown;
