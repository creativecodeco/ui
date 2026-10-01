import cls from 'classnames';

import type { SkeletonType } from '@/types';

const Skeleton = ({
  variant = 'rectangular',
  width,
  height,
  className
}: SkeletonType) => {
  const style: React.CSSProperties = {};
  if (width !== undefined)
    style.width = typeof width === 'number' ? `${width}px` : width;
  if (height !== undefined)
    style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      aria-hidden='true'
      style={style}
      className={cls('skeleton', className, {
        'rounded-full': variant === 'circular',
        'h-4 w-full': variant === 'text' && !height,
        'h-32 w-full': variant === 'rectangular' && !height
      })}
    />
  );
};

export default Skeleton;
