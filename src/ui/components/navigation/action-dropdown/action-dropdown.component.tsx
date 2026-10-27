import cls from 'classnames';

import type { ActionDropdownType } from '@/types';

const ActionDropdown = ({
  label,
  items = [],
  children,
  position = 'bottom',
  align = 'start',
  hover = false,
  open = false,
  color,
  size = 'md',
  className
}: ActionDropdownType) => {
  return (
    <div
      className={cls(
        'dropdown',
        {
          [`dropdown-${position}`]: Boolean(position),
          [`dropdown-${align}`]: Boolean(align),
          'dropdown-hover': hover,
          'dropdown-open': open
        },
        className
      )}
    >
      <div
        tabIndex={0}
        role='button'
        aria-haspopup='true'
        aria-expanded={open}
        className={cls('btn', {
          [`btn-${color}`]: Boolean(color),
          [`btn-${size}`]: Boolean(size)
        })}
      >
        {label}
      </div>
      {children ? (
        <div
          tabIndex={0}
          className='dropdown-content bg-base-100 rounded-box z-10 p-4 shadow-sm'
        >
          {children}
        </div>
      ) : (
        <ul
          tabIndex={0}
          className='dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm'
        >
          {items.map((item, index) => (
            <li
              key={item.id ?? index}
              className={cls({ disabled: item.disabled })}
            >
              <button
                type='button'
                disabled={item.disabled}
                onClick={item.onClick}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActionDropdown;
