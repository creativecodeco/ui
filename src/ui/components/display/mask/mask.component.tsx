import cls from 'classnames';

import type { MaskType } from '@/types';

const Mask = ({
  shape = 'squircle',
  src,
  alt = 'Masked image',
  children,
  className
}: MaskType) => {
  const maskClass = cls('mask', `mask-${shape}`, className);

  if (src) {
    return <img src={src} alt={alt} className={maskClass} />;
  }

  return <div className={maskClass}>{children}</div>;
};

export default Mask;
