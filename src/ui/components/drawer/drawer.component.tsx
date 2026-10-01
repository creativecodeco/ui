import cls from 'classnames';

import type { DrawerType } from '@/types';

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  side = 'left',
  className
}: DrawerType) => {
  return (
    <div
      className={cls('drawer', className, {
        'drawer-open': isOpen,
        'drawer-end': side === 'right'
      })}
    >
      <input
        type='checkbox'
        className='drawer-toggle'
        checked={isOpen}
        onChange={() => undefined}
        aria-label='Toggle drawer'
      />
      <div className='drawer-side z-50'>
        <button
          type='button'
          className='drawer-overlay'
          onClick={onClose}
          data-testid='drawer-overlay'
          aria-label='Close drawer overlay'
        />
        <div className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          <div className='flex justify-between items-center mb-4'>
            {title && <h3 className='font-bold text-lg'>{title}</h3>}
            <button
              type='button'
              className='btn btn-sm btn-circle btn-ghost'
              onClick={onClose}
              aria-label='Close drawer'
            >
              ✕
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
