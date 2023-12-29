import { render } from '@testing-library/react';

import DropDown from './drop-down.component';

describe('<DropDown />', () => {
  it('snapshot', () => {
    const { container } = render(<DropDown name='test' />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full', () => {
    const { container } = render(
      <DropDown name='test' label='Label' isError error='Error' disabled />
    );

    expect(container).toMatchSnapshot();
  });

  it('focus', () => {
    const { container } = render(<DropDown name='test' />);

    container.focus();

    console.log(container);
  });
});
