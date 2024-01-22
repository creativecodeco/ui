import { useCallback } from 'react';

import type { ButtonEvent, ButtonEventHandler } from '@/types';

export default function useSafeButtonProps({
  onClick,
  onSubmit,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) {
  const wrapper = useCallback(
    (callback: ButtonEventHandler, event: ButtonEvent) => {
      !props.disabled && callback(event);
    },
    [props.disabled]
  );

  const handleClick = useCallback(
    (event: ButtonEvent) => {
      onClick && wrapper(onClick, event);
    },
    [onClick, wrapper]
  );

  const handleSubmit = useCallback(
    (event: ButtonEvent) => {
      onSubmit && wrapper(onSubmit, event);
    },
    [onSubmit, wrapper]
  );

  return {
    ...props,
    onClick: handleClick,
    onSubmit: handleSubmit
  };
}
