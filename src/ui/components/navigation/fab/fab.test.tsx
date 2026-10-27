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

  it('renders fab-main-action when mainAction is provided', () => {
    const onMain = jest.fn();
    const { container } = render(
      <Fab
        icon='+'
        mainAction={{
          icon: '★',
          label: 'Primary Action',
          color: 'secondary',
          onClick: onMain
        }}
      />
    );
    const mainActionEl = container.querySelector('.fab-main-action');
    expect(mainActionEl).toBeInTheDocument();
    expect(screen.getByText('Primary Action')).toBeInTheDocument();
    fireEvent.click(screen.getByText('★'));
    expect(onMain).toHaveBeenCalledTimes(1);
  });
});
