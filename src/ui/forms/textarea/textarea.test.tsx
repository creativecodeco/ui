import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextArea from './textarea.component';

describe('<TextArea />', () => {
  it('renders textarea with label and placeholder', () => {
    render(<TextArea label='Comments' placeholder='Enter comments here' />);
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter comments here')
    ).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<TextArea label='Feedback' onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Great work!' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders error message when error prop is set', () => {
    render(<TextArea label='Description' error='Description is required' />);
    expect(screen.getByText('Description is required')).toBeInTheDocument();
  });
});
