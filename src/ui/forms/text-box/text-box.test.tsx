import { fireEvent, render } from '@testing-library/react';
import { FaAdn } from 'react-icons/fa';

import TextBox from './text-box.component';

describe('<TextBox />', () => {
  it('snapshot', () => {
    const { container } = render(<TextBox name='test' />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full', () => {
    const { container } = render(
      <TextBox
        name='test'
        label='Label'
        isError
        error='Error'
        disabled
        size='lg'
        leftIcon={FaAdn}
        rightIcon={FaAdn}
        rightButton
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('label', () => {
    const label = 'Hello Word';
    const { getByText } = render(<TextBox name='test' label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });

  it('with error', () => {
    const error = 'Error message';
    const { getByText } = render(<TextBox name='test' isError error={error} />);

    expect(getByText(error)).toBeInTheDocument();
  });

  it('disabled', () => {
    const { getByTestId } = render(
      <TextBox name='test' disabled data-testid='test' />
    );

    expect(getByTestId('test')).toHaveProperty('disabled', true);
  });

  it('leftIcon', () => {
    const { container } = render(<TextBox name='test' leftIcon={FaAdn} />);

    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('input')?.className).toEqual(
      'input input-bordered w-full text-box-size-md text-box-with-left-icon'
    );
  });

  it('rightIcon', () => {
    const { container } = render(<TextBox name='test' rightIcon={FaAdn} />);

    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('input')?.className).toEqual(
      'input input-bordered w-full text-box-size-md text-box-with-right-icon'
    );
  });

  it('rightIcon typeButton onClick', () => {
    const onClick = jest.fn();
    const { container } = render(
      <TextBox name='test' rightIcon={FaAdn} rightButton onClick={onClick} />
    );

    const svgRight = container.querySelector('svg');

    fireEvent.click(svgRight as SVGSVGElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
