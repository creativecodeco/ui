import { render } from '@testing-library/react';

import TextBox from './text-box.component';

describe('<TextBox />', () => {
  it('snapshot', () => {
    const { container } = render(<TextBox name='test' />);

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
});
