import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './link.component';

describe('<Link />', () => {
  it('renders link with color and hover classes', () => {
    render(
      <Link href='https://creativecode.com.co' color='primary' hover>
        Visit Website
      </Link>
    );
    const link = screen.getByRole('link', { name: 'Visit Website' });
    expect(link).toHaveClass('link', 'link-primary', 'link-hover');
    expect(link).toHaveAttribute('href', 'https://creativecode.com.co');
  });

  it('adds noopener noreferrer when target is _blank and handles onClick', () => {
    const handleClick = jest.fn();
    render(
      <Link href='https://example.com' target='_blank' onClick={handleClick}>
        External
      </Link>
    );
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
