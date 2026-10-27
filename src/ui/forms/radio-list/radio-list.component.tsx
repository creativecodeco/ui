import cls from 'classnames';

import { Radio } from '../radio';

import type { RadioListType } from '@/types';

const RadioList = ({
  name,
  options,
  isError,
  error,
  value,
  className,
  ...otherOptions
}: RadioListType) => {
  if (!options || options.length === 0) {
    return null;
  }

  return (
    <div className={cls('form-control', className)}>
      {options.map((option, index) => (
        <Radio
          key={option.value ?? index}
          name={name}
          {...option}
          {...otherOptions}
          checked={String(option.value) === String(value)}
        />
      ))}
      {isError && <p className='text-error'>{error}</p>}
    </div>
  );
};

export default RadioList;
