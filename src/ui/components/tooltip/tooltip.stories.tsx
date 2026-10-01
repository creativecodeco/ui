import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip.component';

const meta: Meta<typeof Tooltip> = {
  title: '@creativecodeco-ui/Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
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
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Useful info tooltip',
    position: 'top',
    children: <button className='btn btn-primary'>Hover Over Me</button>
  }
};
