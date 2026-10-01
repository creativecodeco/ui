import cls from 'classnames';

import type { StatType } from '@/types';

const Stat = ({
  title,
  value,
  description,
  icon: Icon,
  color,
  className
}: StatType) => {
  return (
    <div className={cls('stat bg-base-100 shadow rounded-box', className)}>
      {Icon && (
        <div
          className={cls('stat-figure', {
            [`text-${color}`]: color
          })}
        >
          <Icon className='w-8 h-8 stroke-current' />
        </div>
      )}
      {title && <div className='stat-title text-xs opacity-70'>{title}</div>}
      <div
        className={cls('stat-value text-3xl font-extrabold', {
          [`text-${color}`]: color
        })}
      >
        {value}
      </div>
      {description && (
        <div className='stat-desc text-xs mt-1'>{description}</div>
      )}
    </div>
  );
};

export default Stat;
