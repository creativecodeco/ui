import type { Meta, StoryObj } from '@storybook/react';
import Dock from './dock.component';

const meta: Meta<typeof Dock> = {
  title: '@creativecodeco-ui/Navigation/Dock',
  component: Dock,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Dock>;

export const Default: Story = {
  args: {
    size: 'md',
    items: [
      { id: 1, label: 'Home', active: true },
      { id: 2, label: 'Favorites' },
      { id: 3, label: 'Settings' }
    ]
  }
};
