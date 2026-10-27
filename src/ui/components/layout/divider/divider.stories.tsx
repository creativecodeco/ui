import type { Meta, StoryObj } from '@storybook/react';
import Divider from './divider.component';

const meta: Meta<typeof Divider> = {
  title: '@creativecodeco-ui/Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean' },
    position: { control: 'select', options: ['start', 'center', 'end'] },
    color: {
      control: 'select',
      options: [
        'neutral',
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
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    children: 'OR'
  }
};
