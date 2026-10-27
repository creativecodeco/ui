import type { Meta, StoryObj } from '@storybook/react';
import Select from './select.component';

const meta: Meta<typeof Select> = {
  title: '@creativecodeco-ui/Form/Select',
  component: Select,
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
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    ghost: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    id: 'framework-select',
    label: 'Pick your favorite framework',
    placeholder: 'Choose one',
    defaultValue: '',
    color: 'primary',
    options: [
      { value: 'react', label: 'React 19' },
      { value: 'nextjs', label: 'Next.js' },
      { value: 'remix', label: 'Remix' }
    ]
  }
};

export const Ghost: Story = {
  args: {
    id: 'ghost-select',
    label: 'Ghost Select',
    ghost: true,
    options: [
      { value: 'react', label: 'React 19' },
      { value: 'nextjs', label: 'Next.js' }
    ]
  }
};

export const WithError: Story = {
  args: {
    id: 'error-select',
    label: 'Country',
    options: [
      { value: 'co', label: 'Colombia' },
      { value: 'us', label: 'United States' }
    ],
    error: 'Please select a valid country'
  }
};
