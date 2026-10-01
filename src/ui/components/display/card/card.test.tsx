import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './card.component';

describe('<Card />', () => {
  it('renders title and children content', () => {
    render(<Card title='Card Title'>Card Body Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Body Content')).toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    render(
      <Card image='https://example.com/image.png' imageAlt='Test Image' />
    );
    const imgElement = screen.getByAltText('Test Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image.png');
  });

  it('renders subtitle and actions', () => {
    render(
      <Card subtitle='Sub header' actions={<button>Action</button>}>
        Body
      </Card>
    );
    expect(screen.getByText('Sub header')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
