import type { Meta, StoryObj } from '@storybook/react';
import Progress from './progress.component';

const meta: Meta<typeof Progress> = {
  title: '@creativecodeco-ui/Feedback/Progress',
  component: Progress,
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
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    max: 100,
    color: 'primary',
    size: 'md'
  }
};

export const Indeterminate: Story = {
  args: {
    color: 'secondary'
  }
};

export const Colors: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-72'>
      <Progress value={20} color='primary' />
      <Progress value={40} color='secondary' />
      <Progress value={60} color='accent' />
      <Progress value={80} color='success' />
      <Progress value={90} color='warning' />
      <Progress value={100} color='error' />
    </div>
  )
};
