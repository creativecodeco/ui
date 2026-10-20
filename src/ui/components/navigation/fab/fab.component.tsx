import cls from 'classnames';

import type { FabType } from '@/types';

const Fab = ({
  icon = '+',
  color = 'primary',
  actions = [],
  flower = false,
  closeIcon,
  className
}: FabType) => {
  return (
    <div
      className={cls(
        'fab',
        {
          'fab-flower': flower
        },
        className
      )}
    >
      <div
        tabIndex={0}
        role='button'
        aria-label='Open actions'
        className={cls('btn btn-lg btn-circle', {
          [`btn-${color}`]: Boolean(color)
        })}
      >
        {icon}
      </div>
      {closeIcon && (
        <div className='fab-close'>
          <span className='btn btn-circle btn-lg btn-error'>{closeIcon}</span>
        </div>
      )}
      {actions.map((action, index) => (
        <div key={action.id ?? index}>
          {action.label && <span>{action.label}</span>}
          <button
            type='button'
            onClick={action.onClick}
            className={cls('btn btn-lg btn-circle', {
              [`btn-${action.color}`]: Boolean(action.color)
            })}
          >
            {action.icon}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Fab;
