import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './spinner.component';

const meta: Meta<typeof Spinner> = {
  title: '@creativecodeco-ui/Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity']
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary'
  }
};

export const Dots: Story = {
  args: {
    variant: 'dots',
    size: 'lg',
    color: 'secondary'
  }
};
