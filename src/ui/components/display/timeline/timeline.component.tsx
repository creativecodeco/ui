import cls from 'classnames';

import type { TimelineType } from '@/types';

const DefaultCheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-5 w-5'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
      clipRule='evenodd'
    />
  </svg>
);

const Timeline = ({
  items = [],
  vertical = true,
  compact = false,
  className
}: TimelineType) => {
  return (
    <ul
      className={cls(
        'timeline',
        {
          'timeline-vertical': vertical,
          'timeline-horizontal': !vertical,
          'timeline-compact': compact
        },
        className
      )}
    >
      {items.map((item, index) => {
        const key = item.id ?? index;
        const colorClass = item.color ? `bg-${item.color}` : 'bg-primary';

        return (
          <li key={key}>
            {index > 0 && <hr className={cls({ [colorClass]: item.active })} />}
            {item.date && (
              <div className='timeline-start timeline-text-secondary font-mono text-xs'>
                {item.date}
              </div>
            )}
            <div
              className={cls('timeline-middle', {
                'text-primary': item.active && !item.color,
                [`text-${item.color}`]: Boolean(item.color)
              })}
            >
              {item.icon ?? <DefaultCheckIcon />}
            </div>
            <div
              className={cls('timeline-end timeline-box', {
                [`border-${item.color}`]: Boolean(item.color)
              })}
            >
              {item.title && <div className='font-bold'>{item.title}</div>}
              {item.subtitle && (
                <div className='text-xs opacity-75'>{item.subtitle}</div>
              )}
              {item.description && (
                <div className='mt-1 text-sm'>{item.description}</div>
              )}
            </div>
            {index < items.length - 1 && (
              <hr className={cls({ [colorClass]: item.active })} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
