import type { Meta, StoryObj } from '@storybook/react';
import Timeline from './timeline.component';

const meta: Meta<typeof Timeline> = {
  title: '@creativecodeco-ui/Display/Timeline',
  component: Timeline,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    vertical: true,
    items: [
      {
        id: 1,
        title: 'Order Placed',
        subtitle: 'Confirmed',
        date: '10:00 AM',
        active: true,
        color: 'success'
      },
      {
        id: 2,
        title: 'Order Processing',
        subtitle: 'In warehouse',
        date: '11:30 AM',
        active: true,
        color: 'info'
      },
      {
        id: 3,
        title: 'Out for Delivery',
        date: '02:00 PM',
        active: false
      }
    ]
  }
};

export const Horizontal: Story = {
  args: {
    vertical: false,
    items: [
      { id: 1, title: 'Phase 1', date: 'Q1', active: true, color: 'primary' },
      { id: 2, title: 'Phase 2', date: 'Q2', active: true, color: 'secondary' },
      { id: 3, title: 'Phase 3', date: 'Q3', active: false }
    ]
  }
};
