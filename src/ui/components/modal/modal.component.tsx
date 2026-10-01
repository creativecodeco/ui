import cls from 'classnames';

import type { ModalType } from '@/types';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  size = 'md',
  closeOnBackdropClick = true
}: ModalType) => {
  if (!isOpen) return null;

  return (
    <div className='modal modal-open role-dialog aria-modal' role='dialog'>
      <div
        className={cls('modal-box', {
          'max-w-xs': size === 'xs',
          'max-w-sm': size === 'sm',
          'max-w-lg': size === 'md',
          'max-w-3xl': size === 'lg'
        })}
      >
        {onClose && (
          <button
            type='button'
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            onClick={onClose}
            aria-label='Close'
          >
            ✕
          </button>
        )}
        {title && <h3 className='font-bold text-lg mb-4'>{title}</h3>}
        <div className='py-2'>{children}</div>
        {actions && <div className='modal-action'>{actions}</div>}
      </div>
      {closeOnBackdropClick && (
        <button
          type='button'
          className='modal-backdrop'
          onClick={onClose}
          data-testid='modal-backdrop'
        >
          close
        </button>
      )}
    </div>
  );
};

export default Modal;
