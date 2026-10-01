import type { Meta, StoryObj } from '@storybook/react';
import Divider from './divider.component';

const meta: Meta<typeof Divider> = {
  title: '@creativecodeco-ui/Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean' },
    position: { control: 'select', options: ['start', 'center', 'end'] }
  }
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    children: 'OR'
  }
};
