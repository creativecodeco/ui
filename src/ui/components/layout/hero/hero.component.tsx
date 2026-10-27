import cls from 'classnames';

import type { HeroType } from '@/types';
import { sanitizeUrl } from '@/utils';

const Hero = ({
  title,
  description,
  actions,
  image,
  overlay = false,
  children,
  className
}: HeroType) => {
  const safeImage =
    typeof image === 'string'
      ? sanitizeUrl(image, '').replace(/["'()\\]/g, '')
      : '';
  const bgStyle = safeImage
    ? { backgroundImage: `url("${safeImage}")` }
    : undefined;

  return (
    <div
      className={cls('hero min-h-64 rounded-xl overflow-hidden', className)}
      style={bgStyle}
    >
      {overlay && <div className='hero-overlay bg-neutral/60' />}
      <div
        className={cls('hero-content text-center', {
          'text-neutral-content': overlay
        })}
      >
        {children ?? (
          <div className='max-w-md'>
            {typeof image !== 'string' && image}
            {title && <h1 className='text-4xl font-bold'>{title}</h1>}
            {description && (
              <p className='py-4 text-sm opacity-90'>{description}</p>
            )}
            {actions && (
              <div className='mt-2 flex justify-center gap-2'>{actions}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
