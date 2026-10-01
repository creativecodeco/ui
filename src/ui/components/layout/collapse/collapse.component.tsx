import cls from 'classnames';

import type { CollapseType } from '@/types';

const Collapse = ({
  title,
  children,
  open,
  onChange,
  icon = 'arrow',
  className
}: CollapseType) => {
  return (
    <div
      className={cls(
        'collapse border border-base-300 rounded-box',
        {
          'collapse-open': open === true,
          [`collapse-${icon}`]: Boolean(icon)
        },
        className
      )}
    >
      <input type='checkbox' checked={open} onChange={onChange} />
      <div className='collapse-title text-base font-medium'>{title}</div>
      <div className='collapse-content text-sm'>{children}</div>
    </div>
  );
};

export default Collapse;
