import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Toggle from './toggle.component';

describe('<Toggle />', () => {
  it('renders toggle input with label', () => {
    render(<Toggle label='Enable notifications' />);
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('triggers onChange event when clicked', () => {
    const handleChange = jest.fn();
    render(<Toggle label='Toggle Me' onChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders error message when error prop is provided', () => {
    render(<Toggle label='Option' error='Field required' />);
    expect(screen.getByText('Field required')).toBeInTheDocument();
  });
});
