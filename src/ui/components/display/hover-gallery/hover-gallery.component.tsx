import cls from 'classnames';

import type { HoverGalleryType } from '@/types';
import { sanitizeUrl } from '@/utils';

const HoverGallery = ({ images = [], className }: HoverGalleryType) => {
  return (
    <figure className={cls('hover-gallery', className)}>
      {images.map((image, index) => (
        <img
          key={image.id ?? index}
          src={sanitizeUrl(image.src, '')}
          alt={image.alt}
        />
      ))}
    </figure>
  );
};

export default HoverGallery;
