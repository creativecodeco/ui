import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Progress from './progress.component';

describe('<Progress />', () => {
  it('renders progress element', () => {
    const { container } = render(<Progress value={40} max={100} />);
    const progress = container.querySelector('progress');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('value', '40');
    expect(progress).toHaveAttribute('max', '100');
  });

  it('applies color and size classes', () => {
    const { container } = render(
      <Progress color='primary' size='lg' value={70} />
    );
    const progress = container.querySelector('progress');
    expect(progress).toHaveClass('progress', 'progress-primary', 'progress-lg');
  });

  it('renders indeterminate state when value is omitted', () => {
    const { container } = render(<Progress color='secondary' />);
    const progress = container.querySelector('progress');
    expect(progress).toBeInTheDocument();
    expect(progress).not.toHaveAttribute('value');
    expect(progress).toHaveClass('progress-secondary');
  });
});
