import cls from 'classnames';

import type { StepsType } from '@/types';

const Steps = ({ items, activeStep = 0, vertical = false }: StepsType) => {
  return (
    <ul
      className={cls('steps', {
        'steps-vertical': vertical,
        'steps-horizontal': !vertical
      })}
    >
      {items.map((item, index) => {
        const isPrimary = item.color === 'primary' || index <= activeStep;
        return (
          <li
            key={index}
            data-content={item.icon ? undefined : index + 1}
            className={cls('step', {
              'step-primary': isPrimary,
              'step-secondary': item.color === 'secondary',
              'step-accent': item.color === 'accent',
              'step-info': item.color === 'info',
              'step-success': item.color === 'success',
              'step-warning': item.color === 'warning',
              'step-error': item.color === 'error'
            })}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Steps;
