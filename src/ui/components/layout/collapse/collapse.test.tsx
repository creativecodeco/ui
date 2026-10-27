import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Collapse from './collapse.component';

describe('<Collapse />', () => {
  it('renders title and content', () => {
    render(
      <Collapse title='Click to expand'>
        <div>Panel content details</div>
      </Collapse>
    );
    expect(screen.getByText('Click to expand')).toBeInTheDocument();
    expect(screen.getByText('Panel content details')).toBeInTheDocument();
  });

  it('applies collapse-open and collapse-close modifiers', () => {
    const { container: openContainer } = render(
      <Collapse title='Open' open icon='plus'>
        <div>Open Content</div>
      </Collapse>
    );
    expect(openContainer.querySelector('.collapse')).toHaveClass(
      'collapse-open',
      'collapse-plus'
    );

    const { container: closeContainer } = render(
      <Collapse title='Closed' close>
        <div>Closed Content</div>
      </Collapse>
    );
    expect(closeContainer.querySelector('.collapse')).toHaveClass(
      'collapse-close'
    );
  });
});
