import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stack from './stack.component';

describe('<Stack />', () => {
  it('renders stacked children with position class', () => {
    const { container } = render(
      <Stack position='top'>
        <div>Card 1</div>
        <div>Card 2</div>
      </Stack>
    );
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('stack', 'stack-top');
  });
});
