import { act, render, renderHook, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import Controller from './controller.component';
import { TextBox } from '@/ui/forms';

describe('<Controller />', () => {
  test('render the input with value', () => {
    const { result } = renderHook(() => useForm());

    const value = 'Hello Word';

    render(
      <Controller
        control={result?.current.control}
        name='test'
        as={TextBox}
        defaultValue={value}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(value);
  });

  test('renders the error message', async () => {
    const { result } = renderHook(() => useForm());

    const errorMessage = 'This field is required';
    const rules = { required: errorMessage };

    render(
      <Controller
        control={result.current.control}
        name='test'
        as={TextBox}
        rules={rules}
      />
    );

    act(() => {
      result.current.handleSubmit((data) => data)();
    });

    await screen.findByText(errorMessage);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('input-error');
  });
});
