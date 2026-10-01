import type { Meta, StoryObj } from '@storybook/react';
import Collapse from './collapse.component';

const meta: Meta<typeof Collapse> = {
  title: '@creativecodeco-ui/Layout/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ['arrow', 'plus'] }
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
