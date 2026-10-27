import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './toggle.component';

const meta: Meta<typeof Toggle> = {
  title: '@creativecodeco-ui/Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
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
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: 'Enable Dark Mode',
    color: 'primary'
  }
};

export const Checked: Story = {
  args: {
    label: 'Auto save',
    checked: true,
    color: 'success'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Toggle size='xs' checked color='primary' />
      <Toggle size='sm' checked color='primary' />
      <Toggle size='md' checked color='primary' />
      <Toggle size='lg' checked color='primary' />
      <Toggle size='xl' checked color='primary' />
    </div>
  )
};
