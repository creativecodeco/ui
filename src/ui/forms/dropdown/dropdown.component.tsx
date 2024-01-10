import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { FaSortDown } from 'react-icons/fa';
import { useOnClickOutside } from 'usehooks-ts';

import { TextBox } from '@/ui/forms';
import type { DropdownOption, DropdownType, TextBoxRef } from '@/types';

const Dropdown = forwardRef<TextBoxRef, DropdownType>(
  (
    {
      name,
      options = [],
      disabled,
      onChange,
      onTextChange,
      value,
      ...otherProps
    },
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

    useEffect(() => {
      const option = options.find(
        (option) => String(option.value) === String(value)
      );
      if (!option) {
        setLabel('');
        setValueFilter(undefined);
        return;
      }

      setLabel(option.label);
      setValueFilter(option.label);
    }, [value]);

    const handleFocus = useCallback(() => {
      if (disabled) {
        return;
      }
      setOpen(true);
    }, [open, disabled]);

    const handleSelect = useCallback(
      (option: DropdownOption) => {
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
          onFocus={handleFocus}
          onChange={handleChange}
          {...otherProps}
          value={label}
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

export default Dropdown;
