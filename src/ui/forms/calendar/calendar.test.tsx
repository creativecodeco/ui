import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './calendar.component';

describe('<Calendar />', () => {
  it('renders month header, days, and fires onChange when a day is clicked', () => {
    const handleChange = jest.fn();
    render(
      <Calendar value='2026-10-15' color='primary' onChange={handleChange} />
    );
    expect(screen.getByText('October 2026')).toBeInTheDocument();
    const selectedDay = screen.getByRole('button', { name: '15' });
    expect(selectedDay).toHaveAttribute('aria-pressed', 'true');
    expect(selectedDay).toHaveClass('btn-primary');

    fireEvent.click(screen.getByRole('button', { name: '20' }));
    expect(handleChange).toHaveBeenCalledWith('2026-10-20');
  });

  it('navigates between months and respects minDate/maxDate', () => {
    render(
      <Calendar value='2026-01-10' minDate='2026-01-05' maxDate='2026-01-25' />
    );
    expect(screen.getByText('January 2026')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '28' })).toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: 'Previous month' }));
    expect(screen.getByText('December 2025')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Next month' }));
    expect(screen.getByText('January 2026')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Next month' }));
    expect(screen.getByText('February 2026')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Previous month' }));
    expect(screen.getByText('January 2026')).toBeInTheDocument();
  });

  it('defaults to current date when value is omitted', () => {
    render(<Calendar />);
    expect(screen.getByRole('group', { name: 'Calendar' })).toBeInTheDocument();
  });
});
