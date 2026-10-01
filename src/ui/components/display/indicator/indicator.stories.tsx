import type { Meta, StoryObj } from '@storybook/react';
import Indicator from './indicator.component';

const meta: Meta<typeof Indicator> = {
  title: '@creativecodeco-ui/Display/Indicator',
  component: Indicator,
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
    position: {
      control: 'select',
      options: [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {
    content: '99+',
    color: 'primary',
    position: 'top-end',
    children: (
      <button type='button' className='btn'>
        Inbox
      </button>
    )
  }
};

export const NotificationDot: Story = {
  args: {
    content: '',
    color: 'error',
    position: 'top-end',
    children: (
      <div className='w-12 h-12 bg-base-300 rounded-lg flex items-center justify-center font-bold'>
        Bell
      </div>
    )
  }
};
