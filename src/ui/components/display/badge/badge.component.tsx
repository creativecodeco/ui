import { useMemo } from 'react';
import cls from 'classnames';

import type { BadgeType } from '@/types';

const Badge = ({
  children,
  color,
  variant,
  icon: Icon,
  iconPosition = 'left',
  outline,
  size = 'md',
  className
}: BadgeType) => {
  const newIcon = useMemo(() => {
    if (!Icon) {
      return;
    }

    return <Icon />;
  }, [Icon]);

  const isStyledVariant = Boolean(outline || variant);

  return (
    <div
      className={cls('badge', className, {
        [`badge-color-${color}`]: !isStyledVariant && color,
        [`badge-${color}`]: isStyledVariant && color,
        'badge-outline': outline || variant === 'outline',
        'badge-dash': variant === 'dash',
        'badge-soft': variant === 'soft',
        'badge-ghost': variant === 'ghost',
        [`badge-size-${size}`]: size !== 'md',
        'gap-2': Icon
      })}
    >
      {iconPosition === 'left' && newIcon}
      {children}
      {iconPosition === 'right' && newIcon}
    </div>
  );
};

export default Badge;
