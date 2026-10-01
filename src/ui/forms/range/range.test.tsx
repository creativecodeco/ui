import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Range from './range.component';

describe('<Range />', () => {
  it('renders range input with label', () => {
    render(
      <Range label='Volume' value={50} min={0} max={100} id='volume-range' />
    );
    expect(screen.getByText('Volume')).toBeInTheDocument();
    const input = screen.getByRole('slider');
    expect(input).toHaveAttribute('value', '50');
    expect(input).toHaveAttribute('min', '0');
    expect(input).toHaveAttribute('max', '100');
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<Range value={20} onChange={handleChange} />);
    const input = screen.getByRole('slider');
    fireEvent.change(input, { target: { value: '40' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders error state', () => {
    render(<Range error='Out of bounds' />);
    expect(screen.getByText('Out of bounds')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toHaveClass('range-error');
  });

  it('applies color and size classes', () => {
    render(<Range color='primary' size='lg' />);
    expect(screen.getByRole('slider')).toHaveClass('range-primary', 'range-lg');
  });
});
