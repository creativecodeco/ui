import type { Meta, StoryObj } from '@storybook/react';
import Range from './range.component';

const meta: Meta<typeof Range> = {
  title: '@creativecodeco-ui/Form/Range',
  component: Range,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'info',
        'error'
      ]
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    vertical: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  args: {
    label: 'Select Value',
    value: 40,
    min: 0,
    max: 100,
    step: 5,
    color: 'primary',
    size: 'md'
  }
};

export const WithError: Story = {
  args: {
    label: 'Volume',
    value: 90,
    error: 'Value exceeds safe threshold'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-72'>
      <Range size='xs' value={20} label='Extra Small' />
      <Range size='sm' value={40} label='Small' />
      <Range size='md' value={60} label='Medium' />
      <Range size='lg' value={80} label='Large' />
      <Range size='xl' value={100} label='Extra Large' />
    </div>
  )
};

export const Vertical: Story = {
  args: {
    label: 'Vertical Range',
    value: 60,
    vertical: true,
    color: 'primary'
  }
};
