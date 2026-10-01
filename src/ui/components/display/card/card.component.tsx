import cls from 'classnames';

import type { CardType } from '@/types';

const Card = ({
  children,
  title,
  subtitle,
  image,
  imageAlt = 'Card image',
  actions,
  compact,
  bordered = true,
  glass,
  className
}: CardType) => {
  return (
    <div
      className={cls('card bg-base-100 shadow-xl', className, {
        'card-compact': compact,
        'card-bordered': bordered,
        glass: glass
      })}
    >
      {image && (
        <figure>
          <img src={image} alt={imageAlt} />
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
