import type { Meta, StoryObj } from '@storybook/react';
import Toast from './toast.component';

const meta: Meta<typeof Toast> = {
  title: '@creativecodeco-ui/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-start',
        'top-center',
        'top-end',
        'bottom-start',
        'bottom-center',
        'bottom-end'
      ]
    },
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
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: 'Message sent successfully!',
    color: 'success',
    position: 'bottom-end'
  }
};
