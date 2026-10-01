import type { Meta, StoryObj } from '@storybook/react';
import Stat from './stat.component';

const meta: Meta<typeof Stat> = {
  title: '@creativecodeco-ui/Components/Stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
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
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$89,400',
    description: '↗︎ 21% more than last month',
    color: 'success'
  }
};
