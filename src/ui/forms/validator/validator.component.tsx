import cls from 'classnames';

import type { ValidatorType } from '@/types';

const Validator = ({
  children,
  hint,
  invalid = false,
  className
}: ValidatorType) => {
  return (
    <div className='w-full'>
      <div
        aria-invalid={invalid ? 'true' : undefined}
        className={cls('validator', className)}
      >
        {children}
      </div>
      {hint && (
        <p
          className={cls('validator-hint', {
            '!visible': invalid
          })}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Validator;
