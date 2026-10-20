import type { Meta, StoryObj } from '@storybook/react';
import Stack from './stack.component';

const meta: Meta<typeof Stack> = {
  title: '@creativecodeco-ui/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    position: 'bottom'
  },
  render: (args) => (
    <Stack {...args} className='w-48 h-28'>
      <div className='bg-primary text-primary-content grid place-content-center rounded-box'>
        1
      </div>
      <div className='bg-secondary text-secondary-content grid place-content-center rounded-box'>
        2
      </div>
      <div className='bg-accent text-accent-content grid place-content-center rounded-box'>
        3
      </div>
    </Stack>
  )
};
