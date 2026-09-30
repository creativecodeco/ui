import type { Meta, StoryObj } from '@storybook/react';
import FileInput from './file-input.component';

const meta: Meta<typeof FileInput> = {
  title: '@creativecodeco-ui/Form/FileInput',
  component: FileInput,
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
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    label: 'Pick a file',
    color: 'primary'
  }
};
