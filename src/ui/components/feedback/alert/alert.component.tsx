import { useMemo } from 'react';
import cls from 'classnames';

import type { AlertType } from '@/types';

const Alert = ({
  children,
  status = 'info',
  variant,
  vertical,
  title,
  icon: Icon,
  onClose,
  className
}: AlertType) => {
  const renderedIcon = useMemo(() => {
    if (!Icon) return null;
    return <Icon className='w-6 h-6 shrink-0 stroke-current' />;
  }, [Icon]);

  return (
    <div
      role='alert'
      className={cls('alert', className, {
        'alert-info': status === 'info',
        'alert-success': status === 'success',
        'alert-warning': status === 'warning',
        'alert-error': status === 'error',
        'alert-soft': variant === 'soft',
        'alert-outline': variant === 'outline',
        'alert-dash': variant === 'dash',
        'alert-vertical': vertical === true,
        'alert-horizontal': vertical === false
      })}
    >
      {renderedIcon}
      <div className='flex-1'>
        {title && <h3 className='font-bold'>{title}</h3>}
        <div className='text-xs'>{children}</div>
      </div>
      {onClose && (
        <button
          type='button'
          className='btn btn-sm btn-ghost btn-circle'
          onClick={onClose}
          aria-label='Dismiss alert'
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
