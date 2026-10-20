import cls from 'classnames';

import type { MegaMenuType } from '@/types';

const MegaMenu = ({
  items = [],
  size = 'md',
  variant = 'default',
  vertical = false,
  className
}: MegaMenuType) => {
  return (
    <nav
      aria-label='Mega menu'
      className={cls(
        'megamenu',
        {
          [`megamenu-${size}`]: Boolean(size),
          'megamenu-wide': variant === 'wide',
          'megamenu-full': variant === 'full',
          'megamenu-vertical': vertical
        },
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={item.id ?? idx} className='dropdown dropdown-bottom'>
          <div
            tabIndex={0}
            role='button'
            className={cls('btn btn-ghost', {
              'megamenu-active': item.active
            })}
          >
            {item.label}
          </div>
          <div
            tabIndex={0}
            className='dropdown-content bg-base-100 rounded-box z-10 p-6 shadow-lg border border-base-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-max'
          >
            {item.columns.map((col, colIdx) => (
              <div key={col.id ?? colIdx}>
                {col.title && (
                  <h6 className='font-semibold text-xs uppercase opacity-60 mb-2'>
                    {col.title}
                  </h6>
                )}
                <ul className='menu p-0 gap-1'>
                  {col.links.map((link, linkIdx) => (
                    <li key={link.id ?? linkIdx}>
                      <a
                        href={link.href ?? '#'}
                        onClick={link.onClick}
                        className='flex flex-col items-start'
                      >
                        <span className='font-medium'>{link.label}</span>
                        {link.description && (
                          <span className='text-xs opacity-60'>
                            {link.description}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default MegaMenu;
