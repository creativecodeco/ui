import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './skeleton.component';

const meta: Meta<typeof Skeleton> = {
  title: '@creativecodeco-ui/Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular'] }
  }
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: {
    variant: 'text',
    width: '100%',
    height: '1rem'
  }
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 60,
    height: 60
  }
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100%',
    height: 200
  }
};
