import React, { useMemo } from 'react';
import cls from 'classnames';

import type { BadgeType } from '@/types';

const Badge = ({
  children,
  color,
  icon: Icon,
  iconPosition = 'left',
  outline,
  size = 'md'
}: BadgeType) => {
  const newIcon = useMemo(() => {
    if (!Icon) {
      return;
    }

    return <Icon />;
  }, [Icon]);

  return (
    <div
      className={cls('badge', {
        [`badge-color-${color}`]: !outline && color,
        [`badge-${color}`]: outline && color,
        'badge-outline': outline,
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
