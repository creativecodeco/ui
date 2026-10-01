import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarGroup from './avatar-group.component';

describe('<AvatarGroup />', () => {
  const avatars = [
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1.webp',
      alt: 'User 1'
    },
    {
      id: 2,
      src: 'https://img.daisyui.com/images/stock/photo-2.webp',
      alt: 'User 2'
    },
    {
      id: 3,
      src: 'https://img.daisyui.com/images/stock/photo-3.webp',
      alt: 'User 3'
    },
    {
      id: 4,
      src: 'https://img.daisyui.com/images/stock/photo-4.webp',
      alt: 'User 4'
    }
  ];

  it('renders visible avatars and remaining counter', () => {
    render(<AvatarGroup avatars={avatars} max={2} />);
    expect(screen.getByAltText('User 1')).toBeInTheDocument();
    expect(screen.getByAltText('User 2')).toBeInTheDocument();
    expect(screen.queryByAltText('User 3')).not.toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
  });
});
