import cls from 'classnames';

import type { IndicatorType } from '@/types';

const positionClasses: Record<string, string> = {
  'top-start': 'indicator-top indicator-start',
  'top-center': 'indicator-top indicator-center',
  'top-end': 'indicator-top indicator-end',
  'middle-start': 'indicator-middle indicator-start',
  'middle-center': 'indicator-middle indicator-center',
  'middle-end': 'indicator-middle indicator-end',
  'bottom-start': 'indicator-bottom indicator-start',
  'bottom-center': 'indicator-bottom indicator-center',
  'bottom-end': 'indicator-bottom indicator-end'
};

const Indicator = ({
  children,
  content,
  color = 'primary',
  position = 'top-end',
  className
}: IndicatorType) => {
  return (
    <div className={cls('indicator', className)}>
      <span
        className={cls(
          'indicator-item badge',
          positionClasses[position] || 'indicator-top indicator-end',
          {
            [`badge-${color}`]: Boolean(color)
          }
        )}
      >
        {content}
      </span>
      {children}
    </div>
  );
};

export default Indicator;
