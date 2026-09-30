import cls from 'classnames';

import type { FileInputType } from '@/types';

const FileInput = ({
  label,
  error,
  color,
  size = 'md',
  bordered = true,
  className,
  ...restProps
}: FileInputType) => {
  return (
    <div className='form-control w-full'>
      {label && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type='file'
        className={cls('file-input w-full', className, {
          'file-input-bordered': bordered,
          [`file-input-${color}`]: color,
          'file-input-xs': size === 'xs',
          'file-input-sm': size === 'sm',
          'file-input-md': size === 'md',
          'file-input-lg': size === 'lg',
          'file-input-error': Boolean(error)
        })}
        {...restProps}
      />
      {error && <span className='text-xs text-error mt-1'>{error}</span>}
    </div>
  );
};

export default FileInput;
