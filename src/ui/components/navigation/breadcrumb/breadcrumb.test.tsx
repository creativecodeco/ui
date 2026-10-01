import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FaHome } from 'react-icons/fa';

import Breadcrumb from './breadcrumb.component';

describe('<Breadcrumb />', () => {
  const items = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'Documents', href: '/documents' },
    { label: 'Report.pdf' }
  ];

  it('renders breadcrumb links and active item', () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Report.pdf')).toBeInTheDocument();
  });

  it('renders links for items with href and text for items without href', () => {
    render(<Breadcrumb items={items} />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');

    const reportSpan = screen.getByText('Report.pdf').closest('span');
    expect(reportSpan).toBeInTheDocument();
  });
});
