import type { Meta, StoryObj } from '@storybook/react';
import Collapse from './collapse.component';

const meta: Meta<typeof Collapse> = {
  title: '@creativecodeco-ui/Layout/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ['arrow', 'plus'] },
    open: { control: 'boolean' },
    close: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  args: {
    title: 'How do I use this Design System?',
    children:
      'You can import any component directly from @creativecodeco/ui and wrap your app with CreativeCodeUIProvider.',
    icon: 'arrow'
  }
};

export const PlusIcon: Story = {
  args: {
    title: 'What browsers are supported?',
    children: 'All modern evergreen browsers (Chrome, Firefox, Safari, Edge).',
    icon: 'plus'
  }
};

export const ForceOpen: Story = {
  args: {
    title: 'Always Open Collapse',
    children: 'Forced open using collapse-open modifier.',
    open: true,
    icon: 'arrow'
  }
};

export const ForceClose: Story = {
  args: {
    title: 'Always Closed Collapse',
    children: 'Forced closed using collapse-close modifier.',
    close: true,
    icon: 'arrow'
  }
};
