import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Drawer from './drawer.component';

describe('<Drawer />', () => {
  it('renders drawer with title and content when open', () => {
    const handleClose = jest.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose} title='Navigation'>
        Drawer Content
      </Drawer>
    );
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Content
      </Drawer>
    );
    fireEvent.click(screen.getByLabelText('Close drawer'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Content
      </Drawer>
    );
    fireEvent.click(screen.getByTestId('drawer-overlay'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
