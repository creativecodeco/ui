import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './carousel.component';

describe('<Carousel />', () => {
  const items = [
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1.webp',
      alt: 'Photo 1'
    },
    {
      id: 2,
      src: 'https://img.daisyui.com/images/stock/photo-2.webp',
      alt: 'Photo 2'
    }
  ];

  it('renders carousel items with images', () => {
    render(<Carousel items={items} />);
    expect(screen.getByAltText('Photo 1')).toBeInTheDocument();
    expect(screen.getByAltText('Photo 2')).toBeInTheDocument();
  });

  it('applies snap and vertical classes', () => {
    const { container } = render(
      <Carousel items={items} snap='center' vertical />
    );
    const carousel = container.querySelector('.carousel');
    expect(carousel).toHaveClass('carousel-center', 'carousel-vertical');
  });

  it('applies horizontal and start snap classes', () => {
    const { container } = render(
      <Carousel items={items} snap='start' fullWidth />
    );
    const carousel = container.querySelector('.carousel');
    expect(carousel).toHaveClass('carousel-start', 'carousel-horizontal');
    expect(container.querySelector('.carousel-item')).toHaveClass('w-full');
  });
});
