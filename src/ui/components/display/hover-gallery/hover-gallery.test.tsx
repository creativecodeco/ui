import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HoverGallery from './hover-gallery.component';

describe('<HoverGallery />', () => {
  const images = [
    { id: 1, src: 'https://picsum.photos/id/10/300/200', alt: 'Slide 1' },
    { id: 2, src: 'https://picsum.photos/id/20/300/200', alt: 'Slide 2' },
    { id: 3, src: 'https://picsum.photos/id/30/300/200', alt: 'Slide 3' }
  ];

  it('renders figure with hover-gallery class and all images', () => {
    const { container } = render(<HoverGallery images={images} />);
    expect(container.querySelector('figure.hover-gallery')).toBeInTheDocument();
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
    expect(screen.getByAltText('Slide 3')).toBeInTheDocument();
  });
});
