import type { Meta, StoryObj } from '@storybook/react';
import Stat from './stat.component';

const meta: Meta<typeof Stat> = {
  title: '@creativecodeco-ui/Display/Stat',
  component: Stat,
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
    }
  }
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$89,400',
    description: '↗︎ 21% more than last month',
    color: 'success'
  }
};

export const WithActions: Story = {
  args: {
    title: 'Account Balance',
    value: '$89,400',
    description: 'Available for withdrawal',
    actions: (
      <div className='flex gap-2'>
        <button className='btn btn-xs btn-success'>Add funds</button>
        <button className='btn btn-xs'>Withdrawal</button>
      </div>
    )
  }
};
