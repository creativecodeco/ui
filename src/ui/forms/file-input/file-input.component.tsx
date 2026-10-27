import { forwardRef } from 'react';
import cls from 'classnames';

import type { FileInputType } from '@/types';

const FileInput = forwardRef<HTMLInputElement, FileInputType>(
  (
    {
      label,
      isError,
      error,
      color,
      size = 'md',
      bordered = true,
      className,
      id,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className='form-control w-full'>
        {label && (
          <label className='label' htmlFor={id}>
            <span className='label-text'>{label}</span>
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type='file'
          aria-invalid={Boolean(isError || error) || undefined}
          className={cls('file-input w-full', className, {
            'file-input-bordered': bordered,
            [`file-input-${color}`]: color,
            'file-input-xs': size === 'xs',
            'file-input-sm': size === 'sm',
            'file-input-md': size === 'md',
            'file-input-lg': size === 'lg',
            'file-input-error': Boolean(isError || error)
          })}
          {...restProps}
        />
        {error && (
          <span role='alert' className='text-xs text-error mt-1'>
            {error}
          </span>
        )}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';

export default FileInput;
