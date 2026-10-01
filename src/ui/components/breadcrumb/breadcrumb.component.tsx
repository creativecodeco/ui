import type { BreadcrumbType } from '@/types';

const Breadcrumb = ({ items }: BreadcrumbType) => {
  return (
    <nav aria-label='Breadcrumb' className='text-sm breadcrumbs'>
      <ul>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={
                item.href ||
                (typeof item.label === 'string' ? item.label : index)
              }
            >
              {item.href ? (
                <a href={item.href} className='inline-flex items-center gap-2'>
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
