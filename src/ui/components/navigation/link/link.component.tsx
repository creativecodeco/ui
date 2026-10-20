import cls from 'classnames';

import type { LinkType } from '@/types';

const Link = ({
  children,
  href = '#',
  target,
  rel,
  color,
  hover = false,
  onClick,
  className
}: LinkType) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? (rel ?? 'noopener noreferrer') : rel}
      onClick={onClick}
      className={cls(
        'link',
        {
          [`link-${color}`]: Boolean(color),
          'link-hover': hover
        },
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
