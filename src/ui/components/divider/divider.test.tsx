import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Divider from './divider.component';

describe('<Divider />', () => {
  it('renders divider with text content', () => {
    render(<Divider>OR</Divider>);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it('applies horizontal/vertical class correctly', () => {
    const { container } = render(<Divider vertical>AND</Divider>);
    const dividerElement = container.querySelector('.divider');
    expect(dividerElement).toHaveClass('divider-horizontal');
  });
});
