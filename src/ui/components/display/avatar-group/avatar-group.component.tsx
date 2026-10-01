import cls from 'classnames';

import type { AvatarGroupType } from '@/types';

const sizeClasses: Record<string, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
};

const AvatarGroup = ({
  avatars = [],
  max,
  size = 'md',
  className
}: AvatarGroupType) => {
  const visibleAvatars = max ? avatars.slice(0, max) : avatars;
  const remainingCount = max && avatars.length > max ? avatars.length - max : 0;
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={cls('avatar-group -space-x-6 rtl:space-x-reverse', className)}
    >
      {visibleAvatars.map((avatar, index) => (
        <div key={avatar.id ?? index} className='avatar'>
          <div className={cls('rounded-full', sizeClass)}>
            {avatar.src ? (
              <img src={avatar.src} alt={avatar.alt || `Avatar ${index + 1}`} />
            ) : (
              <div className='bg-neutral text-neutral-content flex items-center justify-center h-full w-full font-bold text-xs uppercase'>
                {avatar.initials || 'CC'}
              </div>
            )}
          </div>
        </div>
      ))}

      {remainingCount > 0 && (
        <div className='avatar avatar-placeholder'>
          <div
            className={cls(
              'bg-neutral text-neutral-content rounded-full flex items-center justify-center font-bold text-xs',
              sizeClass
            )}
          >
            <span>+{remainingCount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
