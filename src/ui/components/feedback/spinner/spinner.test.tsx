import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Spinner from './spinner.component';

describe('<Spinner />', () => {
  it('renders status element with default classes', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass('loading');
    expect(spinnerElement).toHaveClass('loading-spinner');
  });

  it('applies variant, size and color classes', () => {
    render(<Spinner variant='dots' size='lg' color='primary' />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveClass('loading-dots');
    expect(spinnerElement).toHaveClass('loading-lg');
    expect(spinnerElement).toHaveClass('text-primary');
  });
});
