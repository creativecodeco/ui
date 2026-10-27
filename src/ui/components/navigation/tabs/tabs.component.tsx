import { useRef, useState } from 'react';
import cls from 'classnames';

import type { TabsType } from '@/types';

const Tabs = ({
  items,
  activeId: controlledActiveId,
  onChange,
  variant = 'bordered',
  position,
  size = 'md',
  className
}: TabsType) => {
  const [internalActiveId, setInternalActiveId] = useState(items[0]?.id || '');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeId = controlledActiveId ?? internalActiveId;

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;
    if (!controlledActiveId) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    const enabledIndices = items
      .map((item, idx) => (item.disabled ? -1 : idx))
      .filter((idx) => idx !== -1);

    if (enabledIndices.length === 0) return;

    const currentPos = enabledIndices.indexOf(currentIndex);
    let nextPos = -1;

    if (event.key === 'ArrowRight') {
      nextPos = (currentPos + 1) % enabledIndices.length;
    } else if (event.key === 'ArrowLeft') {
      nextPos =
        (currentPos - 1 + enabledIndices.length) % enabledIndices.length;
    } else if (event.key === 'Home') {
      nextPos = 0;
    } else if (event.key === 'End') {
      nextPos = enabledIndices.length - 1;
    }

    if (nextPos !== -1) {
      event.preventDefault();
      const targetIndex = enabledIndices[nextPos];
      const targetItem = items[targetIndex];
      handleTabClick(targetItem.id, targetItem.disabled);
      tabRefs.current[targetIndex]?.focus();
    }
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div>
      <div
        role='tablist'
        className={cls('tabs flex-wrap', className, {
          'tabs-border': variant === 'bordered' || variant === 'border',
          'tabs-lift': variant === 'lifted' || variant === 'lift',
          'tabs-box': variant === 'boxed' || variant === 'box',
          'tabs-top': position === 'top',
          'tabs-bottom': position === 'bottom',
          [`tabs-${size}`]: Boolean(size)
        })}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type='button'
              key={item.id}
              role='tab'
              aria-selected={item.id === activeId}
              className={cls('tab', {
                'tab-active': item.id === activeId,
                'tab-disabled': item.disabled
              })}
              onClick={() => handleTabClick(item.id, item.disabled)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={item.disabled}
            >
              {Icon && <Icon className='mr-2 inline-block h-4 w-4' />}
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem?.content && (
        <div className='py-4' role='tabpanel' data-testid='tab-content'>
          {activeItem.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
