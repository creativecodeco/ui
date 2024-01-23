import { useCallback } from 'react';

import type { ButtonEvent, ButtonEventHandler } from '@/types';

export default function useSafeButtonProps({
  onClick,
  onSubmit,
  loading,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  loading?: boolean;
}) {
  const wrapper = useCallback(
    (callback: ButtonEventHandler, event: ButtonEvent) => {
      !props.disabled && !loading && callback(event);
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
