import { useCallback } from 'react';

import type { ButtonEvent } from '@/types';

export default function useSafeButtonProps({
  onClick,
  onSubmit,
  loading,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  loading?: boolean;
}) {
  const wrapper = useCallback(
    (
      callback:
        | React.MouseEventHandler<HTMLButtonElement>
        | React.FormEventHandler<HTMLButtonElement>,
      event:
        React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>
    ) => {
      if (!props.disabled && !loading) {
        (callback as (e: typeof event) => void)(event);
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
    (event: React.FormEvent<HTMLButtonElement>) => {
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
