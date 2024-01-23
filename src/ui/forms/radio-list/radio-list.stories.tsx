import type { Meta, StoryObj } from '@storybook/react';

import type { RadioType } from '@/types';

import RadioList from './radio-list.component';

const options = Array.from({ length: 4 }).map<Omit<RadioType, 'name'>>(
  (_, index) => ({
    value: index,
    label: String(index)
  })
);

const meta: Meta<typeof RadioList> = {
  title: '@creativecodeco-ui/Form/RadioList',
  component: RadioList,
  argTypes: {
    name: {
      description: 'Unique Name',
      type: { name: 'string', required: true }
    },
    isError: {
      description: 'Radio has error',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    error: {
      description: 'Error message',
      type: 'string'
    },
    disabled: {
      description: 'Disabled',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    position: {
      description: 'Position',
      type: 'string',
      options: ['left', 'right'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'left' }
      }
    },
    color: {
      description: 'Color',
      type: 'string',
      options: [
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'info',
        'error'
      ],
      control: { type: 'select' }
    },
    size: {
      description: 'Size',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'md' }
      }
    },
    options: {
      description: 'Options',
      table: {
        type: {
          summary: '[]{value: string | number, label: string}: RadioItemType'
        }
      }
    }
  },
  args: {
    name: 'radio',
    options: options
  }
};

export default meta;

type Story = StoryObj<typeof RadioList>;

export const Primary: Story = {
  args: {}
};
