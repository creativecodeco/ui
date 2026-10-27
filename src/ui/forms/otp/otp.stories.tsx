import type { Meta, StoryObj } from '@storybook/react';
import Otp from './otp.component';

const meta: Meta<typeof Otp> = {
  title: '@creativecodeco-ui/Form/Otp',
  component: Otp,
  tags: ['autodocs'],
  argTypes: {
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
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    joined: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Otp>;

export const Default: Story = {
  args: {
    label: 'Enter 6-digit verification code',
    length: 6,
    color: 'primary',
    size: 'md'
  }
};

export const Joined: Story = {
  args: {
    label: 'Joined 4-digit PIN',
    length: 4,
    joined: true,
    color: 'secondary'
  }
};
