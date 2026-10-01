import type { Meta, StoryObj } from '@storybook/react';
import Rating from './rating.component';

const meta: Meta<typeof Rating> = {
  title: '@creativecodeco-ui/Display/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'info',
        'error'
      ]
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    shape: { control: 'select', options: ['star', 'star-2', 'heart'] }
  }
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 4,
    max: 5,
    color: 'warning',
    size: 'md',
    shape: 'star-2'
  }
};

export const HalfStars: Story = {
  args: {
    value: 3.5,
    half: true,
    max: 5,
    color: 'primary'
  }
};

export const HeartShape: Story = {
  args: {
    value: 4,
    shape: 'heart',
    color: 'error'
  }
};

export const Readonly: Story = {
  args: {
    value: 5,
    readonly: true,
    color: 'warning'
  }
};
