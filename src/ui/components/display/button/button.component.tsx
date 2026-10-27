import React, { forwardRef, useMemo } from 'react';
import cls from 'classnames';

import { useSafeButtonProps } from '@/hooks';
import { Badge } from '../badge';

import { ButtonRef, type ButtonType } from '@/types';

const Button = forwardRef<ButtonRef, ButtonType>(
  (
    {
      children,
      isLink,
      color,
      variant,
      outline,
      shape,
      wide,
      block,
      active,
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading,
      loadingLabel,
      withBadge,
      badge,
      badgeProps,
      type = 'button',
      className,
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
          {withBadge && badge !== undefined && (
            <Badge size={size} {...badgeProps}>
              {badge}
            </Badge>
          )}
          {iconPosition === 'right' && newIcon}
        </>
      );
    }, [
      loading,
      loadingLabel,
      iconPosition,
      children,
      newIcon,
      withBadge,
      badge,
      size,
      badgeProps
    ]);

    const isStyledVariant = Boolean(outline || variant);

    return (
      <button
        ref={ref}
        type={type}
        className={cls('btn', className, {
          'button-link': isLink || variant === 'link',
          'btn-outline': !isLink && (outline || variant === 'outline'),
          'btn-dash': !isLink && variant === 'dash',
          'btn-soft': !isLink && variant === 'soft',
          'btn-ghost': !isLink && variant === 'ghost',
          'btn-square': shape === 'square',
          'btn-circle': shape === 'circle',
          'btn-wide': wide,
          'btn-block': block,
          'btn-active': active,
          [`btn-${color}`]: isStyledVariant && color,
          [`button-color-${color}`]: !isStyledVariant && color,
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
