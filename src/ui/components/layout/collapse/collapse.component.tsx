import cls from 'classnames';

import type { CollapseType } from '@/types';

const Collapse = ({
  title,
  children,
  open,
  close,
  onChange,
  icon = 'arrow',
  className
}: CollapseType) => {
  return (
    <div
      className={cls(
        'collapse border border-base-300 rounded-box',
        {
          'collapse-open': open === true && !close,
          'collapse-close': close === true || open === false,
          [`collapse-${icon}`]: Boolean(icon)
        },
        className
      )}
    >
      <input
        type='checkbox'
        aria-label={typeof title === 'string' ? title : 'Toggle collapse'}
        checked={open}
        onChange={onChange}
        readOnly={open !== undefined && !onChange}
      />
      <div className='collapse-title text-base font-medium'>{title}</div>
      <div className='collapse-content text-sm'>{children}</div>
    </div>
  );
};

export default Collapse;
