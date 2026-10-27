import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './menu.component';

describe('<Menu />', () => {
  const handleClick = jest.fn();
  const items = [
    { id: 1, label: 'Header Title', isTitle: true },
    { id: 2, label: 'Item 1', active: true, onClick: handleClick },
    { id: 3, label: 'Item 2', disabled: true },
    { id: 4, label: 'Item 3', focus: true }
  ];

  it('renders menu title and items correctly', () => {
    const { container } = render(<Menu items={items} />);
    expect(screen.getByText('Header Title')).toBeInTheDocument();
    expect(screen.getByText('Item 1').closest('button')).toHaveClass(
      'menu-active'
    );
    expect(screen.getByText('Item 2').closest('li')).toHaveClass(
      'menu-disabled'
    );
    expect(screen.getByText('Item 3').closest('button')).toHaveClass(
      'menu-focus'
    );
    expect(container.querySelector('.menu')).toBeInTheDocument();
  });

  it('handles item clicks', () => {
    render(<Menu items={items} />);
    fireEvent.click(screen.getByText('Item 1'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies horizontal layout', () => {
    const { container } = render(<Menu items={items} horizontal />);
    expect(container.querySelector('ul')).toHaveClass('menu-horizontal');
  });
});
