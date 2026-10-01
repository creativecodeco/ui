import cls from 'classnames';

import type { ToastType } from '@/types';

const Toast = ({ children, position = 'bottom-end', color }: ToastType) => {
  return (
    <div
      className={cls('toast', {
        'toast-start': position.endsWith('-start'),
        'toast-center': position.endsWith('-center'),
        'toast-end': position.endsWith('-end'),
        'toast-top': position.startsWith('top'),
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
