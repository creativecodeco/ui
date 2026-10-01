import type { Meta, StoryObj } from '@storybook/react';
import Join from './join.component';

const meta: Meta<typeof Join> = {
  title: '@creativecodeco-ui/Layout/Join',
  component: Join,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Join>;

export const Default: Story = {
  render: () => (
    <Join>
      <button type='button' className='btn btn-primary'>
        Button 1
      </button>
      <button type='button' className='btn btn-secondary'>
        Button 2
      </button>
      <button type='button' className='btn btn-accent'>
        Button 3
      </button>
    </Join>
  )
};

export const Vertical: Story = {
  render: () => (
    <Join vertical>
      <button type='button' className='btn'>
        Option A
      </button>
      <button type='button' className='btn'>
        Option B
      </button>
      <button type='button' className='btn'>
        Option C
      </button>
    </Join>
  )
};
