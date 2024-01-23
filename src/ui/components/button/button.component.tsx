import React, { forwardRef, useMemo } from 'react';
import cls from 'classnames';

import { useSafeButtonProps } from '@/hooks';

import { ButtonRef, type ButtonType } from '@/types';

const Button = forwardRef<ButtonRef, ButtonType>(
  (
    {
      children,
      isLink,
      color,
      outline,
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading,
      loadingLabel,
      ...otherProps
    },
    ref
  ) => {
    const safeProps = useSafeButtonProps({ loading, ...otherProps });

    const newIcon = useMemo(() => {
      if (!Icon) {
        return;
      }

      return <Icon />;
    }, [Icon]);

    const content = useMemo(() => {
      if (loading) {
        return (
          <>
            <span className='span-loading'></span>
            {loadingLabel}
          </>
        );
      }

      return (
        <>
          {iconPosition === 'left' && newIcon}
          {children}
          {iconPosition === 'right' && newIcon}
        </>
      );
    }, [loading, loadingLabel, iconPosition, children, newIcon]);

    return (
      <button
        ref={ref}
        className={cls('button', {
          'button-link': isLink,
          'button-outline': !isLink && outline,
          [`button-color-${color}`]: !isLink && color,
          [`button-size-${size}`]: size !== 'md',
          'button-loading': loading
        })}
        {...safeProps}
      >
        {content}
      </button>
    );
  }
);

export default Button;
