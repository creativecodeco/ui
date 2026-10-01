import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timeline from './timeline.component';

describe('<Timeline />', () => {
  const items = [
    { id: 1, title: 'Step 1', date: '2026-01-01', active: true },
    { id: 2, title: 'Step 2', date: '2026-01-02', active: false }
  ];

  it('renders timeline items correctly', () => {
    render(<Timeline items={items} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('2026-01-01')).toBeInTheDocument();
  });

  it('applies vertical/horizontal classes', () => {
    const { container } = render(<Timeline items={items} vertical={false} />);
    expect(container.querySelector('ul')).toHaveClass('timeline-horizontal');
  });
});
