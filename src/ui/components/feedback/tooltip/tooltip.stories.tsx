import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip.component';

const meta: Meta<typeof Tooltip> = {
  title: '@creativecodeco-ui/Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'start', 'center', 'end']
    },
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
    open: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Useful info tooltip',
    position: 'top',
    children: <button className='btn btn-primary'>Hover Over Me</button>
  }
};

export const RichContent: Story = {
  args: {
    content: (
      <div className='flex items-center gap-1'>
        <span>✨</span>
        <strong>Rich JSX Tooltip</strong>
      </div>
    ),
    open: true,
    color: 'primary',
    children: <button className='btn'>With Tooltip Content</button>
  }
};
