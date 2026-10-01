import React from 'react';
import cls from 'classnames';

import type { JoinType } from '@/types';

const Join = ({ children, vertical = false, className }: JoinType) => {
  return (
    <div
      className={cls(
        'join',
        {
          'join-vertical': vertical,
          'join-horizontal': !vertical
        },
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const element = child as React.ReactElement<{ className?: string }>;
        return React.cloneElement(element, {
          className: cls(element.props.className, 'join-item')
        });
      })}
    </div>
  );
};

export default Join;
