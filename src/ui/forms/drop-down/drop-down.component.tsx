import React, { forwardRef, useCallback, useState } from 'react';
import { FaSortDown } from 'react-icons/fa';

import type { DropDownOption, DropDownType, TextBoxRef } from '@/types';
import { TextBox } from '../text-box';

const DropDown = forwardRef<TextBoxRef, DropDownType>(
  ({ name, options = [], disabled, onChange, ...otherProps }, ref) => {
    const [label, setLabel] = useState('');

    const handleSelect = useCallback(
      (option: DropDownOption) => {
        onChange?.({
          target: { value: String(option.value) }
        } as React.ChangeEvent<HTMLInputElement>);
        setLabel(option.label);
      },
      [onChange]
    );

    return (
      <div className='dropdown block'>
        <TextBox
          name={name}
          tabIndex={0}
          role='button'
          readOnly
          ref={ref}
          disabled={disabled}
          rightButton
          rightIcon={FaSortDown}
          value={label}
          {...otherProps}
        />
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu w-[95%] bg-base-100'
        >
          {options.map((option) => (
            <li key={option.value} value={option.value}>
              <a onClick={() => handleSelect(option)}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default DropDown;
