import type { Meta, StoryObj } from '@storybook/react';
import Menu from './menu.component';

const meta: Meta<typeof Menu> = {
  title: '@creativecodeco-ui/Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    size: 'md',
    items: [
      { id: 1, label: 'Title Category', isTitle: true },
      { id: 2, label: 'Dashboard', active: true },
      { id: 3, label: 'Settings', badge: 'NEW' },
      { id: 4, label: 'Disabled Item', disabled: true }
    ]
  }
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
    items: [
      { id: 1, label: 'Home', active: true },
      { id: 2, label: 'Products' },
      { id: 3, label: 'About' }
    ]
  }
};

export const Submenu: Story = {
  args: {
    items: [
      {
        id: 1,
        label: 'Parent Item',
        children: [
          { id: 11, label: 'Child 1' },
          { id: 12, label: 'Child 2' }
        ]
      }
    ]
  }
};
