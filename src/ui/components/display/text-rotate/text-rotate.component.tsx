import cls from 'classnames';

import type { TextRotateType } from '@/types';

const TextRotate = ({
  items = [],
  durationClassName,
  className
}: TextRotateType) => {
  return (
    <span className={cls('text-rotate', durationClassName, className)}>
      <span>
        {items.map((item, index) => {
          if (typeof item === 'string') {
            return <span key={index}>{item}</span>;
          }
          return (
            <span key={item.id ?? index} className={item.className}>
              {item.content}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default TextRotate;
