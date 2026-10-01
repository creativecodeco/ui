import type { Meta, StoryObj } from '@storybook/react';
import Hero from './hero.component';

const meta: Meta<typeof Hero> = {
  title: '@creativecodeco-ui/Layout/Hero',
  component: Hero,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Hello there',
    description:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.',
    actions: (
      <button type='button' className='btn btn-primary'>
        Get Started
      </button>
    )
  }
};

export const WithOverlayImage: Story = {
  args: {
    overlay: true,
    image:
      'https://img.daisyui.com/images/stock/photo-1507525428034-b723cf961d3e.webp',
    title: 'Explore the World',
    description: 'Beautiful destinations waiting for your next adventure.',
    actions: (
      <button type='button' className='btn btn-secondary'>
        Learn More
      </button>
    )
  }
};
