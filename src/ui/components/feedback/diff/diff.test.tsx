import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Diff from './diff.component';

describe('<Diff />', () => {
  it('renders both comparison items', () => {
    render(
      <Diff
        item1={<div>Before Content</div>}
        item2={<div>After Content</div>}
      />
    );
    expect(screen.getByText('Before Content')).toBeInTheDocument();
    expect(screen.getByText('After Content')).toBeInTheDocument();
  });
});
