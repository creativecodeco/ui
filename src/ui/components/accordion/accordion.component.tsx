import cls from 'classnames';

import type { AccordionOption, AccordionType } from '@/types';

const getOptionKey = (option: AccordionOption, index: number): string => {
  return option.key || `accordion-item-${index}`;
};

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
      {options.map((option, index) => (
        <div
          key={getOptionKey(option, index)}
          className={cls('collapse bg-base-200', {
            [`accordion-type-${iconType}`]: iconType,
            'join-item border border-base-300': join
          })}
        >
          <input type={multiple ? 'checkbox' : 'radio'} name={name} />
          <div className='collapse-title text-xl font-medium'>
            {option.header}
          </div>
          <div className='collapse-content'>{option.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
