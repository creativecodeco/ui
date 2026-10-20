import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Status from './status.component';

describe('<Status />', () => {
  it('renders status indicator with default props', () => {
    render(<Status ariaLabel='online' />);
    const el = screen.getByRole('status', { name: 'online' });
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('status', 'status-primary', 'status-md');
  });

  it('renders with label and ping animation', () => {
    render(
      <Status color='success' animate='ping' label='Server operational' />
    );
    expect(screen.getByText('Server operational')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveClass('status-success');
  });

  it('applies bounce animation and size classes', () => {
    render(<Status color='warning' size='lg' animate='bounce' />);
    expect(screen.getByRole('status')).toHaveClass(
      'status-warning',
      'status-lg',
      'animate-bounce'
    );
  });
});
