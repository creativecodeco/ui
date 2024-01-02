import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react';
import { FaSortDown } from 'react-icons/fa';
import { useOnClickOutside } from 'usehooks-ts';

import { TextBox } from '@/ui/forms';
import type { DropDownOption, DropDownType, TextBoxRef } from '@/types';

const DropDown = forwardRef<TextBoxRef, DropDownType>(
  (
    { name, options = [], disabled, onChange, onTextChange, ...otherProps },
    ref
  ) => {
    const [label, setLabel] = useState('');
    const [open, setOpen] = useState(false);
    const [valueFilter, setValueFilter] = useState<string | undefined>();

    const refOutside = useRef(null);

    const handleClickOutside = () => {
      const option = options.find(
        ({ label }) => String(label) === String(valueFilter)
      );

      if (!option) {
        setLabel('');
        onTextChange?.();
      }

      setOpen(false);
    };

    useOnClickOutside(refOutside, handleClickOutside);

    const handleFocus = useCallback(() => {
      if (disabled) {
        return;
      }
      setOpen(true);
    }, [open, disabled]);

    const handleSelect = useCallback(
      (option: DropDownOption) => {
        onChange?.({
          target: { value: String(option.value) }
        } as React.ChangeEvent<HTMLInputElement>);
        setLabel(option.label);
        setOpen(false);
      },
      [onChange]
    );

    const handleChange = useCallback(
      ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        onTextChange?.(value);
        setValueFilter(value);
        setLabel(value);
      },
      [onTextChange, setValueFilter]
    );

    const filterOptions = useMemo(
      () =>
        !valueFilter
          ? options
          : options.filter(({ label }) =>
              label.includes(valueFilter as string)
            ),
      [valueFilter, options]
    );

    return (
      <div className='dropdown block'>
        <TextBox
          name={name}
          tabIndex={0}
          ref={ref}
          disabled={disabled}
          rightButton
          rightIcon={FaSortDown}
          value={label}
          onFocus={handleFocus}
          onChange={handleChange}
          {...otherProps}
        />
        {open && (
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu w-full bg-base-100'
            id={`options-${name}`}
            ref={refOutside}
            role='listitem'
            data-testid={`options-${name}`}
          >
            {filterOptions.map((option) => (
              <li
                key={option.value}
                value={option.value}
                onClick={() => handleSelect(option)}
              >
                <a>{option.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default DropDown;
