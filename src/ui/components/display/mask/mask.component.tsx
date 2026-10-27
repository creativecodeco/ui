import cls from 'classnames';

import type { MaskType } from '@/types';
import { sanitizeUrl } from '@/utils';

const Mask = ({
  shape = 'squircle',
  src,
  alt = 'Masked image',
  children,
  className
}: MaskType) => {
  const maskClass = cls('mask', `mask-${shape}`, className);
  const safeSrc = src ? sanitizeUrl(src, '') : '';

  if (safeSrc) {
    return <img src={safeSrc} alt={alt} className={maskClass} />;
  }

  return <div className={maskClass}>{children}</div>;
};

export default Mask;
