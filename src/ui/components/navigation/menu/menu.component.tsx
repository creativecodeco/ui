import cls from 'classnames';

import type { MenuItemType, MenuType } from '@/types';

const renderMenuItem = (item: MenuItemType, index: number) => {
  const key = item.id ?? index;

  if (item.isTitle) {
    return (
      <li key={key} className='menu-title'>
        {item.label}
      </li>
    );
  }

  const hasSubmenu = Boolean(item.children && item.children.length > 0);

  return (
    <li key={key}>
      {hasSubmenu ? (
        <details open>
          <summary
            className={cls({
              active: item.active,
              disabled: item.disabled
            })}
          >
            {item.icon}
            {item.label}
            {item.badge && <span className='badge badge-sm'>{item.badge}</span>}
          </summary>
          <ul>
            {item.children?.map((child, childIndex) =>
              renderMenuItem(child, childIndex)
            )}
          </ul>
        </details>
      ) : item.href ? (
        <a
          href={item.href}
          onClick={item.onClick}
          className={cls({
            active: item.active,
            disabled: item.disabled
          })}
        >
          {item.icon}
          {item.label}
          {item.badge && <span className='badge badge-sm'>{item.badge}</span>}
        </a>
      ) : (
        <button
          type='button'
          onClick={item.onClick}
          disabled={item.disabled}
          className={cls({
            active: item.active,
            disabled: item.disabled
          })}
        >
          {item.icon}
          {item.label}
          {item.badge && <span className='badge badge-sm'>{item.badge}</span>}
        </button>
      )}
    </li>
  );
};

const Menu = ({
  items = [],
  horizontal = false,
  size,
  className
}: MenuType) => {
  return (
    <ul
      className={cls(
        'menu',
        {
          'menu-horizontal': horizontal,
          'menu-vertical': !horizontal,
          [`menu-${size}`]: Boolean(size)
        },
        className
      )}
    >
      {items.map((item, index) => renderMenuItem(item, index))}
    </ul>
  );
};

export default Menu;
