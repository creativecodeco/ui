import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import type { TextBoxRef, TextBoxType } from '@/types/ui/forms';

const TextBox = forwardRef<TextBoxRef, TextBoxType>(
  ({ name, label, isError, error, disabled, ...otherProps }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as TextBoxRef);

    return (
      <div className='form-control w-full'>
        {label && (
          <div className='label'>
            <label htmlFor={name} className='label-text'>
              {label}
            </label>
          </div>
        )}
        <input
          ref={inputRef}
          id={name}
          name={name}
          {...otherProps}
          className='input input-bordered w-full'
          disabled={disabled}
        />
        {isError && <p className='text-red-500'>{error}</p>}
      </div>
    );
  }
);

export default TextBox;
