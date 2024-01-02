import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import cls from 'classnames';

import type { TextBoxRef, TextBoxType } from '@/types/ui/forms';

const TextBox = forwardRef<TextBoxRef, TextBoxType>(
  (
    {
      name,
      label,
      isError,
      error,
      disabled,
      size = 'md',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      rightButton,
      onClick,
      ...otherProps
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as TextBoxRef);

    return (
      <div className='form-control w-full flex'>
        {label && (
          <div className='label'>
            <label htmlFor={name} className='label-text'>
              {label}
            </label>
          </div>
        )}
        <div className='relative'>
          {LeftIcon && (
            <LeftIcon
              className={cls('text-box-left-icon', {
                [`text-box-left-icon-size-${size}`]: size
              })}
            />
          )}
          <input
            ref={inputRef}
            id={name}
            name={name}
            data-testid={name}
            {...otherProps}
            onClick={onClick}
            className={cls(
              'input input-bordered w-full',
              `text-box-size-${size}`,
              {
                'input-error': isError,
                'text-box-with-left-icon': LeftIcon,
                'text-box-with-right-icon': RightIcon
              }
            )}
            disabled={disabled}
          />
          {RightIcon && (
            <RightIcon
              className={cls('text-box-right-icon', {
                [`text-box-right-icon-size-${size}`]: size,
                'cursor-pointer': rightButton
              })}
              onClick={() => rightButton && inputRef.current?.click()}
            />
          )}
        </div>
        {isError && <p className='text-red-500'>{error}</p>}
      </div>
    );
  }
);

export default TextBox;
