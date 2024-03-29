import { fireEvent, render } from '@testing-library/react';

import type { CheckboxType } from '@/types';

import Checkbox from './checkbox.component';

const baseProps: CheckboxType = {
  name: 'test',
  value: 'test'
};

describe('<Checkbox />', () => {
  it('snapshot', () => {
    const { container } = render(<Checkbox {...baseProps} />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full props', () => {
    const { container } = render(
      <Checkbox
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
    const { getByText } = render(<Checkbox {...baseProps} label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });

  it('with error', () => {
    const error = 'Error message';
    const { getByText } = render(
      <Checkbox {...baseProps} isError error={error} />
    );

    expect(getByText(error)).toBeInTheDocument();
  });

  it('disabled', () => {
    const { getByTestId } = render(<Checkbox {...baseProps} disabled />);

    expect(getByTestId('test')).toHaveProperty('disabled', true);
  });

  it('position right', () => {
    const label = 'Hello Word';
    const { getByText } = render(
      <Checkbox {...baseProps} label={label} position='right' />
    );

    expect(getByText(label)).toBeInTheDocument();
  });

  it('color', () => {
    const { container } = render(<Checkbox {...baseProps} color='primary' />);

    expect(container.querySelector('input')?.className).toEqual(
      'checkbox checkbox-color-primary checkbox-size-md'
    );
  });

  it('size', () => {
    const { container } = render(<Checkbox {...baseProps} size='lg' />);

    expect(container.querySelector('input')?.className).toEqual(
      'checkbox checkbox-size-lg'
    );
  });

  it('onChange', () => {
    const onChange = jest.fn();

    const { getByRole } = render(
      <Checkbox {...baseProps} size='lg' onChange={onChange} />
    );

    fireEvent.click(getByRole('checkbox'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
