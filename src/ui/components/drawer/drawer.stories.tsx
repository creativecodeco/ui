import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './drawer.component';

const meta: Meta<typeof Drawer> = {
  title: '@creativecodeco-ui/Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['left', 'right'] }
  }
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Sidebar Menu',
    side: 'left',
    children: 'Drawer navigation menu items'
  }
};
