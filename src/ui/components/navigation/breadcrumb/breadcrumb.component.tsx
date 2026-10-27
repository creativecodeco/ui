import cls from 'classnames';

import type { BreadcrumbType } from '@/types';
import { sanitizeUrl } from '@/utils';

const Breadcrumb = ({ items, className }: BreadcrumbType) => {
  return (
    <nav
      aria-label='Breadcrumb'
      className={cls('text-sm breadcrumbs', className)}
    >
      <ul>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={
                item.href ||
                (typeof item.label === 'string' ? item.label : index)
              }
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.href ? (
                <a
                  href={sanitizeUrl(item.href)}
                  className='inline-flex items-center gap-2'
                >
                  {Icon && <Icon className='stroke-current w-4 h-4' />}
                  {item.label}
                </a>
              ) : (
                <span className='inline-flex items-center gap-2'>
                  {Icon && <Icon className='stroke-current w-4 h-4' />}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
