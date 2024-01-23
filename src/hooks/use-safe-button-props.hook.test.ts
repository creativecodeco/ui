/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react';

import useSafeButtonProps from './use-safe-button-props.hook';

describe('useSafeButtonProps', () => {
  it('disabled false should execute events', () => {
    const props = {
      onClick: jest.fn(),
      onSubmit: jest.fn(),
      disabled: false
    };
    const result = renderHook(() => useSafeButtonProps(props)).result.current;

    expect(result.disabled).toBe(false);

    result.onClick({} as any);
    result.onSubmit({} as any);

    expect(props.onClick).toHaveBeenCalledTimes(1);
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('disabled trusty should not execute events', () => {
    const props = {
      onClick: jest.fn(),
      onSubmit: jest.fn(),
      disabled: true
    };
    const result = renderHook(() => useSafeButtonProps(props)).result.current;

    expect(result.disabled).toBe(true);

    result.onClick({} as any);
    result.onSubmit({} as any);

    expect(props.onClick).toHaveBeenCalledTimes(0);
    expect(props.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should return props', () => {
    const props = {
      onClick: jest.fn(),
      onSubmit: jest.fn(),
      disabled: false
    };

    const result = renderHook(() => useSafeButtonProps(props)).result.current;

    expect(result).toMatchSnapshot();
  });
});
