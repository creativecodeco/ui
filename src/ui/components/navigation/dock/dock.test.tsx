import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dock from './dock.component';

describe('<Dock />', () => {
  const handleClick = jest.fn();
  const items = [
    { id: 1, label: 'Home', active: true, onClick: handleClick },
    { id: 2, label: 'Search', active: false }
  ];

  it('renders dock items correctly', () => {
    render(<Dock items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('handles dock item click', () => {
    render(<Dock items={items} />);
    fireEvent.click(screen.getByText('Home'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
