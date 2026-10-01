import type { Meta, StoryObj } from '@storybook/react';
import Countdown from './countdown.component';

const meta: Meta<typeof Countdown> = {
  title: '@creativecodeco-ui/Feedback/Countdown',
  component: Countdown,
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
type Story = StoryObj<typeof Countdown>;

export const Default: Story = {
  args: {
    value: 59,
    label: 'sec',
    size: 'lg',
    color: 'primary'
  }
};

export const TimerDisplay: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Countdown value={10} label='days' size='lg' color='primary' />
      <Countdown value={23} label='hours' size='lg' color='secondary' />
      <Countdown value={59} label='min' size='lg' color='accent' />
      <Countdown value={45} label='sec' size='lg' color='warning' />
    </div>
  )
};
