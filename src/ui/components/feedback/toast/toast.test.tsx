import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Toast from './toast.component';

describe('<Toast />', () => {
  it('renders children content', () => {
    render(<Toast>New notification</Toast>);
    expect(screen.getByText('New notification')).toBeInTheDocument();
  });

  it('applies correct position classes', () => {
    const { container } = render(
      <Toast position='top-start'>Top Start Toast</Toast>
    );
    const toastElement = container.querySelector('.toast');
    expect(toastElement).toHaveClass('toast-top');
    expect(toastElement).toHaveClass('toast-start');
  });

  it('applies alert color class when color is provided', () => {
    const { container } = render(
      <Toast color='neutral' position='middle-center'>
        Neutral Middle Toast
      </Toast>
    );
    const toastElement = container.querySelector('.toast');
    expect(toastElement).toHaveClass('toast-middle', 'toast-center');
    const alertElement = container.querySelector('.alert');
    expect(alertElement).toHaveClass('alert-neutral');
  });
});
