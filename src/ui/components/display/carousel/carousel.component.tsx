import cls from 'classnames';

import type { CarouselType } from '@/types';

const Carousel = ({
  items,
  children,
  snap,
  vertical = false,
  fullWidth = false,
  className
}: CarouselType) => {
  return (
    <div
      className={cls(
        'carousel',
        {
          'carousel-center': snap === 'center',
          'carousel-end': snap === 'end',
          'carousel-vertical': vertical
        },
        className
      )}
    >
      {items && items.length > 0
        ? items.map((item, index) => (
            <div
              key={item.id ?? index}
              className={cls('carousel-item', { 'w-full': fullWidth })}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt || `Slide ${index + 1}`}
                  className={cls({ 'w-full object-cover': fullWidth })}
                />
              ) : (
                item.content
              )}
            </div>
          ))
        : children}
    </div>
  );
};

export default Carousel;
