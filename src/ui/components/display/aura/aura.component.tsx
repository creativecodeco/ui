import cls from 'classnames';

import type { AuraType } from '@/types';

const Aura = ({
  children,
  variant = 'rainbow',
  size = 'md',
  glow = false,
  className
}: AuraType) => {
  return (
    <div
      className={cls(
        'aura',
        {
          [`aura-${variant}`]: Boolean(variant),
          [`aura-${size}`]: Boolean(size),
          'aura-glow': glow
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Aura;
