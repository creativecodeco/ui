import type { Meta, StoryObj } from '@storybook/react';
import HoverGallery from './hover-gallery.component';

const meta: Meta<typeof HoverGallery> = {
  title: '@creativecodeco-ui/Display/HoverGallery',
  component: HoverGallery,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof HoverGallery>;

export const Default: Story = {
  args: {
    className: 'max-w-xs rounded-box',
    images: [
      { id: 1, src: 'https://picsum.photos/id/1015/400/300', alt: 'View 1' },
      { id: 2, src: 'https://picsum.photos/id/1016/400/300', alt: 'View 2' },
      { id: 3, src: 'https://picsum.photos/id/1018/400/300', alt: 'View 3' },
      { id: 4, src: 'https://picsum.photos/id/1019/400/300', alt: 'View 4' }
    ]
  }
};
