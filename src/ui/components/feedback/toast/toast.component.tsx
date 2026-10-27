import cls from 'classnames';

import type { ToastType } from '@/types';

const Toast = ({
  children,
  position = 'bottom-end',
  color,
  className
}: ToastType) => {
  return (
    <div
      role='status'
      aria-live='polite'
      className={cls('toast', className, {
        'toast-start': position.endsWith('-start'),
        'toast-center': position.endsWith('-center'),
        'toast-end': position.endsWith('-end'),
        'toast-top': position.startsWith('top'),
        'toast-middle': position.startsWith('middle'),
        'toast-bottom': position.startsWith('bottom')
      })}
    >
      <div
        className={cls('alert', {
          [`alert-${color}`]: color
        })}
      >
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Toast;
