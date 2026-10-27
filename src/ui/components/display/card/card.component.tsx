import cls from 'classnames';

import type { CardType } from '@/types';
import { sanitizeUrl } from '@/utils';

const Card = ({
  children,
  title,
  subtitle,
  image,
  imageAlt = 'Card image',
  actions,
  size,
  compact,
  bordered = true,
  dash = false,
  side = false,
  imageFull = false,
  glass,
  className
}: CardType) => {
  const safeImage = image ? sanitizeUrl(image, '') : '';

  return (
    <div
      className={cls('card bg-base-100 shadow-xl', className, {
        [`card-${size}`]: Boolean(size),
        'card-sm': compact && !size,
        'card-border': bordered && !dash,
        'card-dash': dash,
        'card-side': side,
        'image-full': imageFull,
        glass: glass
      })}
    >
      {safeImage && (
        <figure>
          <img src={safeImage} alt={imageAlt} />
        </figure>
      )}
      <div className='card-body'>
        {title && <h2 className='card-title'>{title}</h2>}
        {subtitle && <p className='text-sm opacity-70'>{subtitle}</p>}
        {children}
        {actions && (
          <div className='card-actions justify-end mt-4'>{actions}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
