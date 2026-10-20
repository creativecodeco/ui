import cls from 'classnames';

import type { FieldsetType } from '@/types';

const Fieldset = ({
  legend,
  label,
  children,
  disabled = false,
  className
}: FieldsetType) => {
  return (
    <fieldset
      disabled={disabled}
      className={cls(
        'fieldset bg-base-200 border-base-300 rounded-box border p-4',
        className
      )}
    >
      {legend && <legend className='fieldset-legend'>{legend}</legend>}
      {children}
      {label && <p className='fieldset-label'>{label}</p>}
    </fieldset>
  );
};

export default Fieldset;
