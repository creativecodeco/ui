import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadialProgress from './radial-progress.component';

describe('<RadialProgress />', () => {
  it('renders progressbar with value percentage', () => {
    render(<RadialProgress value={75} color='primary' />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '75');
    expect(progress).toHaveClass('radial-progress', 'text-primary');
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('clamps value between 0 and 100 and supports custom children', () => {
    render(
      <RadialProgress value={120} size='6rem' thickness='4px'>
        Done
      </RadialProgress>
    );
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '100');
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});
