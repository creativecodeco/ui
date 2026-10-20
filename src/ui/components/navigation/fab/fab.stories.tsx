import type { Meta, StoryObj } from '@storybook/react';
import Fab from './fab.component';

const meta: Meta<typeof Fab> = {
  title: '@creativecodeco-ui/Navigation/Fab',
  component: Fab,
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
    },
    flower: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  render: (args) => (
    <div className='relative h-64 w-full'>
      <Fab
        {...args}
        className='!absolute'
        closeIcon='✕'
        actions={[
          { id: 1, label: 'New Post', icon: '✎' },
          { id: 2, label: 'Upload', icon: '↑' },
          { id: 3, label: 'Share', icon: '★' }
        ]}
      />
    </div>
  ),
  args: {
    icon: '+',
    color: 'primary',
    flower: false
  }
};
