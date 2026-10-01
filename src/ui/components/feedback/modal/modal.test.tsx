import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from './modal.component';

describe('<Modal />', () => {
  it('renders nothing when isOpen is false', () => {
    const { container } = render(<Modal isOpen={false}>Modal Content</Modal>);
    expect(container.firstChild).toBeNull();
  });

  it('renders modal content when isOpen is true', () => {
    render(
      <Modal isOpen={true} title='Test Title'>
        Modal Content
      </Modal>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Modal Content
      </Modal>
    );
    fireEvent.click(screen.getByLabelText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked if closeOnBackdropClick is true', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnBackdropClick={true}>
        Modal Content
      </Modal>
    );
    fireEvent.click(screen.getByTestId('modal-backdrop'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders actions when provided', () => {
    render(
      <Modal isOpen={true} actions={<button>Confirm</button>}>
        Modal Content
      </Modal>
    );
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });
});
