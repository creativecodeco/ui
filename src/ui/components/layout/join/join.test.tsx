import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Join from './join.component';

describe('<Join />', () => {
  it('clones children with join-item class', () => {
    render(
      <Join>
        <button type='button'>Btn 1</button>
        <button type='button'>Btn 2</button>
      </Join>
    );
    expect(screen.getByText('Btn 1')).toHaveClass('join-item');
    expect(screen.getByText('Btn 2')).toHaveClass('join-item');
  });
});
