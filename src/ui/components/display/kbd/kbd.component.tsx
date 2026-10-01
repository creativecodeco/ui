import cls from 'classnames';

import type { KbdType } from '@/types';

const Kbd = ({ children, size = 'md', className }: KbdType) => {
  return (
    <kbd
      className={cls(
        'kbd',
        {
          [`kbd-${size}`]: Boolean(size)
        },
        className
      )}
    >
      {children}
    </kbd>
  );
};

export default Kbd;
