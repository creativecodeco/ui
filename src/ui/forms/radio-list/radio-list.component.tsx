import React from 'react';

import { Radio } from '../radio';

import type { RadioListType } from '@/types';

const RadioList = ({
  name,
  options,
  isError,
  error,
  value,
  ...otherOptions
}: RadioListType) => {
  if (!options || options.length === 0) {
    return;
  }

  return (
    <div className='form-control'>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          {...option}
          {...otherOptions}
          checked={String(option.value) === String(value)}
        />
      ))}
      {isError && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default RadioList;
