import { render } from '@testing-library/react';
import { DropDown, TextBox } from '.';

describe('Index imports', () => {
  it('DropDown', () => {
    const { container } = render(<DropDown name='test' />);

    expect(container).toMatchSnapshot();
  });

  it('TextBox', () => {
    const { container } = render(<TextBox name='test' />);

    expect(container).toMatchSnapshot();
  });
});
