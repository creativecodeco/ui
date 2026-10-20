import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Aura from './aura.component';

describe('<Aura />', () => {
  it('renders child with aura classes', () => {
    const { container } = render(
      <Aura variant='gold' size='lg' glow>
        <button className='btn'>Upgrade</button>
      </Aura>
    );
    expect(screen.getByText('Upgrade')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      'aura',
      'aura-gold',
      'aura-lg',
      'aura-glow'
    );
  });
});
