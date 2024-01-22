import React, { forwardRef } from 'react';
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
      disabled,
      ...otherProps
    },
    ref
  ) => {
    const safeProps = useSafeButtonProps({ disabled, ...otherProps });

    const getIcon = () => {
      if (!Icon) {
        return;
      }

      return <Icon />;
    };

    return (
      <button
        ref={ref}
        className={cls('button', {
          'button-link': isLink,
          'button-outline': !isLink && outline,
          [`button-color-${color}`]: !isLink && color,
          [`button-size-${size}`]: size !== 'md'
        })}
        {...safeProps}
      >
        {iconPosition === 'left' && getIcon()}
        {children}
        {iconPosition === 'right' && getIcon()}
      </button>
    );
  }
);

export default Button;
