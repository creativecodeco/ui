import cls from 'classnames';

import type { MenuItemType, MenuType } from '@/types';
import { sanitizeUrl } from '@/utils';

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
  const itemClasses = cls({
    'menu-active': item.active,
    'menu-focus': item.focus,
    'menu-disabled': item.disabled
  });

  let content;
  if (hasSubmenu) {
    content = (
      <details open>
        <summary className={itemClasses}>
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
    );
  } else if (item.href) {
    content = (
      <a
        href={sanitizeUrl(item.href)}
        onClick={item.onClick}
        className={itemClasses}
      >
        {item.icon}
        {item.label}
        {item.badge && <span className='badge badge-sm'>{item.badge}</span>}
      </a>
    );
  } else {
    content = (
      <button
        type='button'
        onClick={item.onClick}
        disabled={item.disabled}
        className={itemClasses}
      >
        {item.icon}
        {item.label}
        {item.badge && <span className='badge badge-sm'>{item.badge}</span>}
      </button>
    );
  }

  return (
    <li key={key} className={cls({ 'menu-disabled': item.disabled })}>
      {content}
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
