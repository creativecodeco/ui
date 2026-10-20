import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from './list.component';

describe('<List />', () => {
  const mockItems = [
    {
      id: 1,
      leading: '01',
      title: 'Dio Lupa',
      subtitle: 'Remaining Reason',
      description: ' Song description text',
      actions: <button type='button'>Play</button>
    },
    {
      id: 2,
      title: 'Ellie Beilish',
      subtitle: 'Bears of a fever'
    }
  ];

  it('renders header and list items correctly', () => {
    render(<List header='Most played songs' items={mockItems} />);
    expect(screen.getByText('Most played songs')).toBeInTheDocument();
    expect(screen.getByText('Dio Lupa')).toBeInTheDocument();
    expect(screen.getByText('Remaining Reason')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
  });

  it('renders custom children when provided', () => {
    render(
      <List>
        <li className='list-row'>Custom Row</li>
      </List>
    );
    expect(screen.getByText('Custom Row')).toBeInTheDocument();
  });
});
