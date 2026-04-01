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
      if (!props.disabled && !loading) {
        callback(event);
      }
    },
    [props.disabled, loading]
  );

  const handleClick = useCallback(
    (event: ButtonEvent) => {
      if (onClick) {
        wrapper(onClick, event);
      }
    },
    [onClick, wrapper]
  );

  const handleSubmit = useCallback(
    (event: ButtonEvent) => {
      if (onSubmit) {
        wrapper(onSubmit, event);
      }
    },
    [onSubmit, wrapper]
  );

  return {
    ...props,
    onClick: handleClick,
    onSubmit: handleSubmit
  };
}
