import cls from 'classnames';

import type { ListType } from '@/types';

const List = ({ header, items = [], children, className }: ListType) => {
  return (
    <ul
      className={cls('list bg-base-100 rounded-box shadow-md', className)}
      role='list'
    >
      {header && (
        <li className='p-4 pb-2 text-xs opacity-60 tracking-wide'>{header}</li>
      )}
      {items.map((item, index) => (
        <li key={item.id ?? index} className='list-row'>
          {item.leading && <div>{item.leading}</div>}
          <div className='list-col-grow'>
            <div>{item.title}</div>
            {item.subtitle && (
              <div className='text-xs uppercase font-semibold opacity-60'>
                {item.subtitle}
              </div>
            )}
          </div>
          {item.description && (
            <p className='list-col-wrap text-xs'>{item.description}</p>
          )}
          {item.actions && (
            <div className='flex items-center gap-2'>{item.actions}</div>
          )}
        </li>
      ))}
      {children}
    </ul>
  );
};

export default List;
