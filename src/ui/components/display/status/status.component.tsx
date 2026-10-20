import cls from 'classnames';

import type { StatusType } from '@/types';

const Status = ({
  color = 'primary',
  size = 'md',
  animate = 'none',
  ariaLabel = 'status',
  label,
  className
}: StatusType) => {
  const statusClasses = cls(
    'status',
    {
      [`status-${color}`]: Boolean(color),
      [`status-${size}`]: Boolean(size),
      'animate-bounce': animate === 'bounce'
    },
    className
  );

  const indicator =
    animate === 'ping' ? (
      <div className='inline-grid *:[grid-area:1/1]'>
        <div
          aria-hidden='true'
          className={cls('status animate-ping', {
            [`status-${color}`]: Boolean(color),
            [`status-${size}`]: Boolean(size)
          })}
        />
        <div role='status' aria-label={ariaLabel} className={statusClasses} />
      </div>
    ) : (
      <span role='status' aria-label={ariaLabel} className={statusClasses} />
    );

  if (label) {
    return (
      <span className='inline-flex items-center gap-2'>
        {indicator}
        <span>{label}</span>
      </span>
    );
  }

  return indicator;
};

export default Status;
