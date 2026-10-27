import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './tabs.component';

const meta: Meta<typeof Tabs> = {
  title: '@creativecodeco-ui/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['border', 'lift', 'box', 'bordered', 'lifted', 'boxed']
    },
    position: {
      control: 'select',
      options: ['top', 'bottom']
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    variant: 'border',
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

export const Lifted: Story = {
  args: {
    variant: 'lift',
    items: [
      { id: 'tab-1', label: 'Tab 1', content: 'Tab 1 lifted content' },
      { id: 'tab-2', label: 'Tab 2', content: 'Tab 2 lifted content' },
      { id: 'tab-3', label: 'Tab 3', content: 'Tab 3 lifted content' }
    ]
  }
};

export const Boxed: Story = {
  args: {
    variant: 'box',
    items: [
      { id: 'tab-1', label: 'HTML', content: '<p>HTML code</p>' },
      { id: 'tab-2', label: 'JSX', content: '<Component />' },
      { id: 'tab-3', label: 'CSS', content: '.style { color: red; }' }
    ]
  }
};

export const BottomPosition: Story = {
  args: {
    variant: 'lift',
    position: 'bottom',
    items: [
      { id: 'tab-1', label: 'First', content: 'Content above bottom tabs' },
      { id: 'tab-2', label: 'Second', content: 'Second panel content' }
    ]
  }
};
