import { useState } from 'react';
import cls from 'classnames';

import type { TabsType } from '@/types';

const Tabs = ({
  items,
  activeId: controlledActiveId,
  onChange,
  variant = 'bordered',
  size = 'md'
}: TabsType) => {
  const [internalActiveId, setInternalActiveId] = useState(items[0]?.id || '');

  const activeId = controlledActiveId ?? internalActiveId;

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;
    if (!controlledActiveId) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div>
      <div
        role='tablist'
        className={cls('tabs', {
          'tabs-bordered': variant === 'bordered',
          'tabs-lifted': variant === 'lifted',
          'tabs-boxed': variant === 'boxed',
          'tabs-xs': size === 'xs',
          'tabs-sm': size === 'sm',
          'tabs-md': size === 'md',
          'tabs-lg': size === 'lg'
        })}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              type='button'
              key={item.id}
              role='tab'
              aria-selected={item.id === activeId}
              className={cls('tab', {
                'tab-active': item.id === activeId,
                'tab-disabled': item.disabled
              })}
              onClick={() => handleTabClick(item.id, item.disabled)}
              disabled={item.disabled}
            >
              {Icon && <Icon className='mr-2 inline-block h-4 w-4' />}
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem?.content && (
        <div className='py-4' data-testid='tab-content'>
          {activeItem.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
