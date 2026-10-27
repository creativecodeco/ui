import type { Meta, StoryObj } from '@storybook/react';
import Card from './card.component';

const meta: Meta<typeof Card> = {
  title: '@creativecodeco-ui/Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    compact: { control: 'boolean' },
    bordered: { control: 'boolean' },
    dash: { control: 'boolean' },
    side: { control: 'boolean' },
    imageFull: { control: 'boolean' },
    glass: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'CreativeCode Card',
    subtitle: 'High performance design system components',
    children:
      'Explore rich UI components built with React 19 and Tailwind CSS v4.',
    actions: <button className='btn btn-primary'>Learn More</button>
  }
};

export const WithImage: Story = {
  args: {
    title: 'Featured Component',
    image:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    imageAlt: 'Shoes',
    children: 'Card with a top figure image header.',
    actions: <button className='btn btn-accent'>Buy Now</button>
  }
};

export const Dash: Story = {
  args: {
    title: 'Dashed Card',
    dash: true,
    children: 'Card using DaisyUI v5 card-dash modifier.',
    actions: <button className='btn btn-primary btn-sm'>Action</button>
  }
};

export const Side: Story = {
  args: {
    title: 'Side Layout Card',
    side: true,
    bordered: true,
    image:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    imageAlt: 'Shoes',
    children: 'Horizontal card layout using card-side.',
    actions: <button className='btn btn-primary'>Watch</button>
  }
};

export const ImageFull: Story = {
  args: {
    title: 'Overlay Card',
    imageFull: true,
    image:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    imageAlt: 'Shoes',
    children: 'Background image overlay card using image-full.',
    actions: <button className='btn btn-primary'>Buy Now</button>
  }
};
