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
      ghost = false,
      className,
      id,
      ...restProps
    },
    ref
  ) => {
    const hasError = Boolean(isError || error);
    const inputClasses = cls('file-input w-full', className, {
      'file-input-bordered': bordered && !ghost,
      'file-input-ghost': ghost,
      [`file-input-${color}`]: Boolean(color),
      [`file-input-${size}`]: Boolean(size),
      'file-input-error': hasError
    });

    return (
      <div className='form-control w-full'>
        {label ? (
          <label className='label' htmlFor={id}>
            <span className='label-text'>{label}</span>
          </label>
        ) : null}
        <input
          {...restProps}
          ref={ref}
          id={id}
          type='file'
          aria-invalid={hasError || undefined}
          className={inputClasses}
        />
        {error ? (
          <span role='alert' className='text-xs text-error mt-1'>
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';

export default FileInput;
