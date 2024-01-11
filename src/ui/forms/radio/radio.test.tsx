import { fireEvent, render } from '@testing-library/react';

import type { RadioType } from '@/types';

import Radio from './radio.component';

const baseProps: RadioType = {
  name: 'test',
  value: 'test'
};

describe('<Radio />', () => {
  it('snapshot', () => {
    const { container } = render(<Radio {...baseProps} />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full props', () => {
    const { container } = render(
      <Radio
        {...baseProps}
        checked
        color='primary'
        size='lg'
        isError
        error='Error test'
        position='right'
        disabled
        label='Label'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('label', () => {
    const label = 'Hello Word';
    const { getByText } = render(<Radio {...baseProps} label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });

  it('with error', () => {
    const error = 'Error message';
    const { getByText } = render(
      <Radio {...baseProps} isError error={error} />
    );

    expect(getByText(error)).toBeInTheDocument();
  });

  it('disabled', () => {
    const { getByTestId } = render(<Radio {...baseProps} disabled />);

    expect(getByTestId('test')).toHaveProperty('disabled', true);
  });

  it('position right', () => {
    const label = 'Hello Word';
    const { getByText } = render(
      <Radio {...baseProps} label={label} position='right' />
    );

    expect(getByText(label)).toBeInTheDocument();
  });

  it('color', () => {
    const { container } = render(<Radio {...baseProps} color='primary' />);

    expect(container.querySelector('input')?.className).toEqual(
      'radio radio-color-primary radio-size-md'
    );
  });

  it('size', () => {
    const { container } = render(<Radio {...baseProps} size='lg' />);

    expect(container.querySelector('input')?.className).toEqual(
      'radio radio-size-lg'
    );
  });

  it('onChange', () => {
    const onChange = jest.fn();

    const { getByRole } = render(<Radio {...baseProps} onChange={onChange} />);

    fireEvent.click(getByRole('radio'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
