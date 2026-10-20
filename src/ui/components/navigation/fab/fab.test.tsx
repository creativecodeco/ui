import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fab from './fab.component';

describe('<Fab />', () => {
  it('renders trigger and speed-dial action buttons', () => {
    const onEdit = jest.fn();
    const { container } = render(
      <Fab
        icon='+'
        flower
        closeIcon='✕'
        actions={[{ id: 'edit', label: 'Edit', icon: '✎', onClick: onEdit }]}
      />
    );
    expect(container.querySelector('.fab')).toHaveClass('fab-flower');
    expect(screen.getByText('Edit')).toBeInTheDocument();
    fireEvent.click(screen.getByText('✎'));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });
});
