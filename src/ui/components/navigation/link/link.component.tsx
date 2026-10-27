import cls from 'classnames';

import type { LinkType } from '@/types';
import { sanitizeUrl } from '@/utils';

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
  const safeRel =
    target === '_blank'
      ? Array.from(
          new Set([...(rel ? rel.split(/\s+/) : []), 'noopener', 'noreferrer'])
        ).join(' ')
      : rel;

  return (
    <a
      href={sanitizeUrl(href)}
      target={target}
      rel={safeRel}
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
