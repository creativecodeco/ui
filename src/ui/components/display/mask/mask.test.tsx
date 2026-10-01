import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mask from './mask.component';

describe('<Mask />', () => {
  it('renders masked image element', () => {
    render(
      <Mask
        src='https://img.daisyui.com/images/stock/photo-1.webp'
        shape='squircle'
        alt='Avatar'
      />
    );
    const img = screen.getByAltText('Avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('mask', 'mask-squircle');
  });

  it('renders masked div element with children', () => {
    render(
      <Mask shape='heart'>
        <div>Masked content</div>
      </Mask>
    );
    expect(screen.getByText('Masked content')).toBeInTheDocument();
  });
});
