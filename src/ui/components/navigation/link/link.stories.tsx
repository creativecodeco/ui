import type { Meta, StoryObj } from '@storybook/react';
import Link from './link.component';

const meta: Meta<typeof Link> = {
  title: '@creativecodeco-ui/Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error'
      ]
    },
    hover: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Click me',
    color: 'primary',
    hover: false
  }
};

export const HoverOnly: Story = {
  args: {
    children: 'Underline on hover',
    color: 'secondary',
    hover: true
  }
};
