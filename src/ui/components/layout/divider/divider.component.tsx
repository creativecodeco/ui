import cls from 'classnames';

import type { DividerType } from '@/types';

const Divider = ({
  children,
  vertical = false,
  color,
  position = 'center',
  className
}: DividerType) => {
  return (
    <div
      className={cls('divider', className, {
        'divider-horizontal': vertical,
        'divider-vertical': !vertical,
        'divider-start': position === 'start',
        'divider-end': position === 'end',
        [`divider-${color}`]: color
      })}
    >
      {children}
    </div>
  );
};

export default Divider;
