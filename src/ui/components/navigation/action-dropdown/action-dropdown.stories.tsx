import type { Meta, StoryObj } from '@storybook/react';
import ActionDropdown from './action-dropdown.component';

const meta: Meta<typeof ActionDropdown> = {
  title: '@creativecodeco-ui/Navigation/ActionDropdown',
  component: ActionDropdown,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end']
    },
    hover: { control: 'boolean' },
    open: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof ActionDropdown>;

export const Default: Story = {
  args: {
    label: 'Options',
    color: 'primary',
    items: [
      { id: 1, label: 'Profile Settings' },
      { id: 2, label: 'Billing' },
      { id: 3, label: 'Sign Out' }
    ]
  }
};

export const HoverTrigger: Story = {
  args: {
    label: 'Hover me',
    hover: true,
    items: [
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' }
    ]
  }
};
