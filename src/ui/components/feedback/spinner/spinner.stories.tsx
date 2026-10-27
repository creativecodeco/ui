import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './spinner.component';

const meta: Meta<typeof Spinner> = {
  title: '@creativecodeco-ui/Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity']
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
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
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary'
  }
};

export const Dots: Story = {
  args: {
    variant: 'dots',
    size: 'lg',
    color: 'secondary'
  }
};

export const Variants: Story = {
  render: () => (
    <div className='flex items-center gap-6'>
      <Spinner variant='spinner' color='primary' />
      <Spinner variant='dots' color='secondary' />
      <Spinner variant='ring' color='accent' />
      <Spinner variant='ball' color='info' />
      <Spinner variant='bars' color='success' />
      <Spinner variant='infinity' color='warning' />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='xs' color='primary' />
      <Spinner size='sm' color='primary' />
      <Spinner size='md' color='primary' />
      <Spinner size='lg' color='primary' />
      <Spinner size='xl' color='primary' />
    </div>
  )
};
