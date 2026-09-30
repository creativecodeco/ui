import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './textarea.component';

const meta: Meta<typeof TextArea> = {
  title: '@creativecodeco-ui/Form/TextArea',
  component: TextArea,
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
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: 'Bio / Notes',
    placeholder: 'Tell us a little bit about yourself...',
    rows: 4
  }
};

export const WithError: Story = {
  args: {
    label: 'Summary',
    placeholder: 'Brief summary',
    error: 'Summary cannot exceed 500 characters'
  }
};
