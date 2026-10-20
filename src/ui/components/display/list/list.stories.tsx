import type { Meta, StoryObj } from '@storybook/react';
import List from './list.component';

const meta: Meta<typeof List> = {
  title: '@creativecodeco-ui/Display/List',
  component: List,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    header: 'Most played songs this week',
    items: [
      {
        id: 1,
        leading: (
          <span className='text-2xl font-thin opacity-30 tabular-nums'>01</span>
        ),
        title: 'Dio Lupa',
        subtitle: 'Remaining Reason',
        actions: <button className='btn btn-square btn-ghost'>▶</button>
      },
      {
        id: 2,
        leading: (
          <span className='text-2xl font-thin opacity-30 tabular-nums'>02</span>
        ),
        title: 'Ellie Beilish',
        subtitle: 'Bears of a fever',
        actions: <button className='btn btn-square btn-ghost'>▶</button>
      },
      {
        id: 3,
        leading: (
          <span className='text-2xl font-thin opacity-30 tabular-nums'>03</span>
        ),
        title: 'Sabrino Gardener',
        subtitle: 'Cappuccino',
        actions: <button className='btn btn-square btn-ghost'>▶</button>
      }
    ]
  }
};

export const WithWrappedDescription: Story = {
  args: {
    header: 'Recent episodes',
    items: [
      {
        id: 1,
        title: 'Design Systems at Scale',
        subtitle: 'Episode 12',
        description:
          'Exploring token architecture, accessibility standards, and component composition with Tailwind CSS v4 and DaisyUI v5.'
      }
    ]
  }
};
