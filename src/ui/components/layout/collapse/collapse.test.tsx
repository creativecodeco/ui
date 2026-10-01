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
});
