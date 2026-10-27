import { forwardRef } from 'react';
import cls from 'classnames';

import type { TextAreaType } from '@/types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>(
  (
    {
      label,
      isError,
      error,
      color,
      size = 'md',
      bordered = true,
      className,
      rows = 4,
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
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          aria-invalid={Boolean(isError || error) || undefined}
          className={cls('textarea w-full', className, {
            'textarea-bordered': bordered,
            [`textarea-${color}`]: Boolean(color),
            [`textarea-${size}`]: Boolean(size),
            'textarea-error': Boolean(isError || error)
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

TextArea.displayName = 'TextArea';

export default TextArea;
