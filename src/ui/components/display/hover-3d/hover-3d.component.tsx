import cls from 'classnames';

import type { Hover3DType } from '@/types';

const HOVER_SENSORS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

const Hover3D = ({ children, className }: Hover3DType) => {
  return (
    <div className={cls('hover-3d', className)}>
      {children}
      {HOVER_SENSORS.map((sensor) => (
        <div key={sensor} aria-hidden='true' />
      ))}
    </div>
  );
};

export default Hover3D;
