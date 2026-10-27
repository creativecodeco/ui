import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionDropdown from './action-dropdown.component';

describe('<ActionDropdown />', () => {
  it('renders trigger and executes item click callbacks', () => {
    const handleEdit = jest.fn();
    render(
      <ActionDropdown
        label='Actions'
        color='primary'
        hover
        items={[
          { id: 'edit', label: 'Edit Profile', onClick: handleEdit },
          { id: 'delete', label: 'Delete', disabled: true }
        ]}
      />
    );
    expect(screen.getByRole('button', { name: 'Actions' })).toHaveClass(
      'btn',
      'btn-primary'
    );
    fireEvent.click(screen.getByRole('button', { name: 'Edit Profile' }));
    expect(handleEdit).toHaveBeenCalledTimes(1);
    const deleteBtn = screen.getByRole('button', { name: 'Delete' });
    expect(deleteBtn).toBeDisabled();
    expect(deleteBtn.closest('li')).toHaveClass('menu-disabled');
  });

  it('renders custom children content when provided', () => {
    render(
      <ActionDropdown label='Info' open>
        <p>Custom Popover Content</p>
      </ActionDropdown>
    );
    expect(screen.getByText('Custom Popover Content')).toBeInTheDocument();
  });
});
