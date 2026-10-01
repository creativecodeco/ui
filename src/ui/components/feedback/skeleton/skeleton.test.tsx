import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Skeleton from './skeleton.component';

describe('<Skeleton />', () => {
  it('renders skeleton element', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass('skeleton');
  });

  it('applies circular variant class', () => {
    const { container } = render(
      <Skeleton variant='circular' width={40} height={40} />
    );
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass('rounded-full');
    expect(skeleton).toHaveStyle({ width: '40px', height: '40px' });
  });
});
