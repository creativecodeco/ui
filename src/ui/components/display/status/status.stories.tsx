import type { Meta, StoryObj } from '@storybook/react';
import Status from './status.component';

const meta: Meta<typeof Status> = {
  title: '@creativecodeco-ui/Display/Status',
  component: Status,
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
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    animate: { control: 'select', options: ['none', 'ping', 'bounce'] }
  }
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Default: Story = {
  args: {
    color: 'success',
    size: 'md',
    label: 'Online'
  }
};

export const PingAnimation: Story = {
  args: {
    color: 'error',
    animate: 'ping',
    label: 'Server is down'
  }
};

export const BounceAnimation: Story = {
  args: {
    color: 'info',
    animate: 'bounce',
    label: 'New messages'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Status size='xs' color='primary' />
      <Status size='sm' color='primary' />
      <Status size='md' color='primary' />
      <Status size='lg' color='primary' />
      <Status size='xl' color='primary' />
    </div>
  )
};

export const Colors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Status color='neutral' />
      <Status color='primary' />
      <Status color='secondary' />
      <Status color='accent' />
      <Status color='info' />
      <Status color='success' />
      <Status color='warning' />
      <Status color='error' />
    </div>
  )
};
