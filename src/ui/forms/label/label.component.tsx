import cls from 'classnames';

import type { LabelType } from '@/types';

const Label = ({
  text,
  htmlFor,
  floating = false,
  children,
  className
}: LabelType) => {
  if (floating) {
    return (
      <label htmlFor={htmlFor} className={cls('floating-label', className)}>
        <span>{text}</span>
        {children}
      </label>
    );
  }

  return (
    <label htmlFor={htmlFor} className={cls('label', className)}>
      <span className='label-text'>{text}</span>
      {children}
    </label>
  );
};

export default Label;
