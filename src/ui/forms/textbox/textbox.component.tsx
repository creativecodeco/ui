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
      <label htmlFor={name} className='form-control w-full flex flex-row gap-2'>
        {label && (
          <div className='label'>
            <span className='label-text'>{label}</span>
          </div>
        )}
        <div className='relative'>
          {LeftIcon && (
            <LeftIcon
              className={cls('textbox-left-icon', {
                [`textbox-left-icon-size-${size}`]: size,
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
              `textbox-size-${size}`,
              {
                'input-error': isError,
                'textbox-with-left-icon': LeftIcon,
                'textbox-with-right-icon': RightIcon,
                [`textbox-color-${color}`]: !isError && color
              }
            )}
            disabled={disabled}
          />
          {RightIcon && (
            <RightIcon
              className={cls('textbox-right-icon', {
                [`textbox-right-icon-size-${size}`]: size,
                'cursor-pointer': !disabled && rightButton,
                'cursor-not-allowed': disabled
              })}
              onClick={() =>
                rightButton && !disabled && inputRef.current?.click()
              }
            />
          )}
        </div>
        {isError && <p className='text-red-500 flex items-center'>{error}</p>}
      </label>
    );
  }
);

export default TextBox;
