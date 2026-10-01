import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './carousel.component';

const meta: Meta<typeof Carousel> = {
  title: '@creativecodeco-ui/Display/Carousel',
  component: Carousel,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    snap: 'center',
    items: [
      {
        id: 1,
        src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        alt: 'Slide 1'
      },
      {
        id: 2,
        src: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        alt: 'Slide 2'
      },
      {
        id: 3,
        src: 'https://img.daisyui.com/images/stock/photo-1572635196237-14b3f281503f.webp',
        alt: 'Slide 3'
      }
    ]
  }
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    items: [
      {
        id: 1,
        src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        alt: 'Slide 1'
      },
      {
        id: 2,
        src: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        alt: 'Slide 2'
      }
    ]
  }
};
