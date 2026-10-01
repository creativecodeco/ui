import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FaInfoCircle } from 'react-icons/fa';

import Alert from './alert.component';

describe('<Alert />', () => {
  it('renders alert message and default info status', () => {
    render(<Alert>System notification</Alert>);
    expect(screen.getByText('System notification')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('alert-info');
  });

  it('renders title and status correctly', () => {
    render(
      <Alert status='success' title='Success Title'>
        Operation completed.
      </Alert>
    );
    expect(screen.getByText('Success Title')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('alert-success');
  });

  it('renders icon when passed', () => {
    const { container } = render(
      <Alert icon={FaInfoCircle}>Alert with icon</Alert>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('calls onClose when dismiss button is clicked', () => {
    const handleClose = jest.fn();
    render(<Alert onClose={handleClose}>Dismissible Alert</Alert>);
    fireEvent.click(screen.getByLabelText('Dismiss alert'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
