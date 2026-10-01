import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './tabs.component';

const meta: Meta<typeof Tabs> = {
  title: '@creativecodeco-ui/Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['bordered', 'lifted', 'boxed'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    variant: 'bordered',
    items: [
      { id: '1', label: 'Overview', content: 'Overview panel content' },
      { id: '2', label: 'Settings', content: 'Settings panel content' },
      {
        id: '3',
        label: 'Disabled',
        content: 'Disabled content',
        disabled: true
      }
    ]
  }
};

export const Boxed: Story = {
  args: {
    variant: 'boxed',
    items: [
      { id: 'tab-1', label: 'HTML', content: '<p>HTML code</p>' },
      { id: 'tab-2', label: 'JSX', content: '<Component />' },
      { id: 'tab-3', label: 'CSS', content: '.style { color: red; }' }
    ]
  }
};
