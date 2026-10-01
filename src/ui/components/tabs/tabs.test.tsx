import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tabs from './tabs.component';

describe('<Tabs />', () => {
  const items = [
    { id: 'tab1', label: 'Tab One', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab Two', content: <div>Content 2</div> },
    {
      id: 'tab3',
      label: 'Tab Three',
      content: <div>Content 3</div>,
      disabled: true
    }
  ];

  it('renders all tabs and first tab content by default', () => {
    render(<Tabs items={items} />);
    expect(screen.getByText('Tab One')).toBeInTheDocument();
    expect(screen.getByText('Tab Two')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('switches content on tab click', () => {
    const handleChange = jest.fn();
    render(<Tabs items={items} onChange={handleChange} />);
    fireEvent.click(screen.getByText('Tab Two'));
    expect(handleChange).toHaveBeenCalledWith('tab2');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('does not trigger onChange when clicking disabled tab', () => {
    const handleChange = jest.fn();
    render(<Tabs items={items} onChange={handleChange} />);
    fireEvent.click(screen.getByText('Tab Three'));
    expect(handleChange).not.toHaveBeenCalled();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
