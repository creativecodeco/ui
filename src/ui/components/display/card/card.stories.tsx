import type { Meta, StoryObj } from '@storybook/react';
import Card from './card.component';

const meta: Meta<typeof Card> = {
  title: '@creativecodeco-ui/Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    compact: { control: 'boolean' },
    bordered: { control: 'boolean' },
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
