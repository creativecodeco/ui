import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Kbd from './kbd.component';

describe('<Kbd />', () => {
  it('renders key label content', () => {
    render(<Kbd>⌘</Kbd>);
    expect(screen.getByText('⌘')).toBeInTheDocument();
    expect(screen.getByText('⌘')).toHaveClass('kbd');
  });

  it('applies size classes', () => {
    render(<Kbd size='lg'>Ctrl</Kbd>);
    expect(screen.getByText('Ctrl')).toHaveClass('kbd', 'kbd-lg');
  });
});
