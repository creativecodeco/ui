import cls from 'classnames';

import type { DockType } from '@/types';

const Dock = ({ items = [], size, className }: DockType) => {
  return (
    <div
      className={cls(
        'dock',
        {
          [`dock-${size}`]: Boolean(size)
        },
        className
      )}
    >
      {items.map((item, index) => {
        const key = item.id ?? index;
        return (
          <button
            key={key}
            type='button'
            onClick={item.onClick}
            disabled={item.disabled}
            className={cls({
              'dock-active': item.active,
              [`text-${item.color}`]: Boolean(item.color)
            })}
          >
            {item.icon}
            {item.label && <span className='dock-label'>{item.label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default Dock;
