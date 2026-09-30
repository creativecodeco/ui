import type { BreadcrumbType } from '@/types';

const Breadcrumb = ({ items }: BreadcrumbType) => {
  return (
    <div className='breadcrumbs text-sm'>
      <ul>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              {item.href ? (
                <a href={item.href} className='inline-flex items-center gap-2'>
                  {Icon && <Icon className='h-4 w-4 stroke-current' />}
                  {item.label}
                </a>
              ) : (
                <span className='inline-flex items-center gap-2'>
                  {Icon && <Icon className='h-4 w-4 stroke-current' />}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
