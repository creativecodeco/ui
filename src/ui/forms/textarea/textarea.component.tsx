import cls from 'classnames';

import type { TextAreaType } from '@/types';

const TextArea = ({
  label,
  error,
  color,
  size = 'md',
  bordered = true,
  className,
  rows = 4,
  ...restProps
}: TextAreaType) => {
  return (
    <div className='form-control w-full'>
      {label && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <textarea
        rows={rows}
        className={cls('textarea w-full', className, {
          'textarea-bordered': bordered,
          [`textarea-${color}`]: color,
          'textarea-xs': size === 'xs',
          'textarea-sm': size === 'sm',
          'textarea-md': size === 'md',
          'textarea-lg': size === 'lg',
          'textarea-error': Boolean(error)
        })}
        {...restProps}
      />
      {error && <span className='text-xs text-error mt-1'>{error}</span>}
    </div>
  );
};

export default TextArea;
