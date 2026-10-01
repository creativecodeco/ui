import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Countdown from './countdown.component';

describe('<Countdown />', () => {
  it('renders countdown value', () => {
    const { container } = render(<Countdown value={45} label='seconds' />);
    expect(screen.getByText('seconds')).toBeInTheDocument();
    const span = container.querySelector('.countdown span');
    expect(span).toHaveAttribute('aria-label', '45');
  });

  it('applies size and color classes', () => {
    const { container } = render(
      <Countdown value={10} size='lg' color='primary' />
    );
    const countdown = container.querySelector('.countdown');
    expect(countdown).toHaveClass('text-4xl', 'font-bold', 'text-primary');
  });
});
