import React from 'react';
import cls from 'classnames';

import type { AccordionType } from '@/types';

const Accordion = ({
  name,
  join,
  options,
  iconType = 'arrow',
  multiple
}: AccordionType) => {
  return (
    <div
      className={cls('flex flex-wrap', {
        'join join-vertical w-full': join,
        'gap-2': !join
      })}
    >
      {options.map(({ header, body }, index) => (
        <div
          key={index}
          className={cls('collapse bg-base-200', {
            [`accordion-type-${iconType}`]: iconType,
            'join-item border border-base-300': join
          })}
        >
          <input type={multiple ? 'checkbox' : 'radio'} name={name} />
          <div className='collapse-title text-xl font-medium'>{header}</div>
          <div className='collapse-content'>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
