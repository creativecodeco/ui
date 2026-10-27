import cls from 'classnames';

import type { TooltipType } from '@/types';

const Tooltip = ({
  children,
  content,
  position = 'top',
  color,
  open,
  className
}: TooltipType) => {
  return (
    <div
      data-tip={typeof content === 'string' ? content : undefined}
      className={cls('tooltip', className, {
        [`tooltip-${position}`]: Boolean(position),
        'tooltip-open': open,
        [`tooltip-${color}`]: color
      })}
    >
      {typeof content !== 'string' && content && (
        <div className='tooltip-content'>{content}</div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
