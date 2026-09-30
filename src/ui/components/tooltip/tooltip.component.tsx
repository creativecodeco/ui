import cls from 'classnames';

import type { TooltipType } from '@/types';

const Tooltip = ({
  children,
  content,
  position = 'top',
  color,
  open
}: TooltipType) => {
  return (
    <div
      data-tip={typeof content === 'string' ? content : undefined}
      className={cls('tooltip', {
        'tooltip-top': position === 'top',
        'tooltip-bottom': position === 'bottom',
        'tooltip-left': position === 'left',
        'tooltip-right': position === 'right',
        'tooltip-open': open,
        [`tooltip-${color}`]: color
      })}
    >
      {children}
    </div>
  );
};

export default Tooltip;
