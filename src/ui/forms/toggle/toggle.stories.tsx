import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './toggle.component';

const meta: Meta<typeof Toggle> = {
  title: '@creativecodeco-ui/Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: 'Enable Dark Mode',
    color: 'primary'
  }
};

export const Checked: Story = {
  args: {
    label: 'Auto save',
    checked: true,
    color: 'success'
  }
};
