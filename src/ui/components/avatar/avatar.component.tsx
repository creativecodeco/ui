import { useMemo } from 'react';
import cls from 'classnames';

import type { AvatarType } from '@/types';
import { getInitials, isValidUrl } from '@/utils';

const Avatar = ({
  isOnline = false,
  ring = false,
  rounded = false,
  size = 'md',
  src,
  withStatus = false
}: AvatarType) => {
  const isUri = useMemo(() => isValidUrl(src), [src]);

  const letters = useMemo(() => getInitials(src), [src, isUri]);

  return (
    <div
      data-testid='avatar'
      className={cls('avatar', {
        'avatar-online': withStatus && isOnline,
        'avatar-offline': withStatus && !isOnline,
        'avatar-placeholder': !isUri
      })}
    >
      <div
        data-testid='avatar-content'
        className={cls('text-neutral-content', {
          'bg-neutral': !isUri,
          [`avatar-size-${size}`]: size,
          'rounded-full': rounded,
          rounded: !rounded,
          'avatar-ring': ring
        })}
      >
        {!isUri && <span>{letters}</span>}
        {isUri && <img src={src} alt='Avatar' />}
      </div>
    </div>
  );
};

export default Avatar;
