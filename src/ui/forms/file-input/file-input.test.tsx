import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import FileInput from './file-input.component';

describe('<FileInput />', () => {
  it('renders file input with label', () => {
    render(<FileInput label='Upload Avatar' />);
    expect(screen.getByText('Upload Avatar')).toBeInTheDocument();
  });

  it('triggers onChange event when file selected', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FileInput label='Document' onChange={handleChange} />
    );
    const input = container.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    fireEvent.change(input, { target: { files: [file] } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders error alert when error prop is provided', () => {
    render(<FileInput label='Resume' error='File is too large' />);
    expect(screen.getByRole('alert')).toHaveTextContent('File is too large');
  });

  it('applies ghost, size xl and color neutral classes', () => {
    const { container } = render(<FileInput ghost size='xl' color='neutral' />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toHaveClass(
      'file-input-ghost',
      'file-input-xl',
      'file-input-neutral'
    );
  });
});
