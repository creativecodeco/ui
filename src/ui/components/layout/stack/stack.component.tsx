import cls from 'classnames';

import type { StackType } from '@/types';

const Stack = ({ children, position = 'bottom', className }: StackType) => {
  return (
    <div
      className={cls(
        'stack',
        {
          [`stack-${position}`]: Boolean(position)
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
