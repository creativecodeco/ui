import { render } from '@testing-library/react';
import Checkbox from './checkbox.component';

describe('<Checkbox />', () => {
  it('snapshot', () => {
    const { container } = render(<Checkbox name='test' />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full props', () => {
    const { container } = render(
      <Checkbox
        name='test'
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
    const { getByText } = render(<Checkbox name='test' label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });

  it('with error', () => {
    const error = 'Error message';
    const { getByText } = render(
      <Checkbox name='test' isError error={error} />
    );

    expect(getByText(error)).toBeInTheDocument();
  });

  it('disabled', () => {
    const { getByTestId } = render(<Checkbox name='test' disabled />);

    expect(getByTestId('test')).toHaveProperty('disabled', true);
  });

  it('position right', () => {
    const label = 'Hello Word';
    const { getByText } = render(
      <Checkbox name='test' label={label} position='right' />
    );

    expect(getByText(label)).toBeInTheDocument();
  });

  it('color', () => {
    const { container } = render(<Checkbox name='test' color='primary' />);

    expect(container.querySelector('input')?.className).toEqual(
      'checkbox checkbox-color-primary checkbox-size-md'
    );
  });

  it('size', () => {
    const { container } = render(<Checkbox name='test' size='lg' />);

    expect(container.querySelector('input')?.className).toEqual(
      'checkbox checkbox-size-lg'
    );
  });
});
