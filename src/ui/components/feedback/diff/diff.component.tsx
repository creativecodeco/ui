import cls from 'classnames';

import type { DiffType } from '@/types';

const Diff = ({ item1, item2, aspectRatio = '16/9', className }: DiffType) => {
  return (
    <div className={cls('diff', className)} style={{ aspectRatio }}>
      <div className='diff-item-1'>{item1}</div>
      <div className='diff-item-2'>{item2}</div>
      <div className='diff-resizer' />
    </div>
  );
};

export default Diff;
