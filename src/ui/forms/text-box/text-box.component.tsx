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
      color,
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
      <label htmlFor={name} className='form-control w-full flex'>
        {label && <span className='label-text'>{label}</span>}
        <div className='relative'>
          {LeftIcon && (
            <LeftIcon
              className={cls('text-box-left-icon', {
                [`text-box-left-icon-size-${size}`]: size,
                'cursor-not-allowed': disabled
              })}
            />
          )}
          <input
            ref={inputRef}
            id={name}
            name={name}
            data-testid={name}
            {...otherProps}
            onClick={(e) => !disabled && onClick?.(e)}
            className={cls(
              'input input-bordered w-full',
              `text-box-size-${size}`,
              {
                'input-error': isError,
                'text-box-with-left-icon': LeftIcon,
                'text-box-with-right-icon': RightIcon,
                [`text-box-color-${color}`]: !isError && color
              }
            )}
            disabled={disabled}
          />
          {RightIcon && (
            <RightIcon
              className={cls('text-box-right-icon', {
                [`text-box-right-icon-size-${size}`]: size,
                'cursor-pointer': !disabled && rightButton,
                'cursor-not-allowed': disabled
              })}
              onClick={() =>
                rightButton && !disabled && inputRef.current?.click()
              }
            />
          )}
        </div>
        {isError && <p className='text-red-500'>{error}</p>}
      </label>
    );
  }
);

export default TextBox;
