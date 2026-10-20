import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MegaMenu from './mega-menu.component';

describe('<MegaMenu />', () => {
  const mockItems = [
    {
      id: 'products',
      label: 'Products',
      active: true,
      columns: [
        {
          id: 'ui',
          title: 'Design System',
          links: [
            {
              id: 'comp',
              label: 'Components',
              description: 'Atomic UI blocks'
            }
          ]
        }
      ]
    }
  ];

  it('renders mega-menu items, column titles and links', () => {
    render(<MegaMenu items={mockItems} size='lg' variant='wide' />);
    const nav = screen.getByRole('navigation', { name: 'Mega menu' });
    expect(nav).toHaveClass('megamenu', 'megamenu-lg', 'megamenu-wide');
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Design System')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Atomic UI blocks')).toBeInTheDocument();
  });
});
