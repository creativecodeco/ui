import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from 'react-icons/fa';

import Dropdown from './dropdown.component';

const meta: Meta<typeof Dropdown> = {
  title: '@creativecodeco-ui/Form/Dropdown',
  component: Dropdown,
  argTypes: {
    name: {
      description: 'Unique Name',
      type: { name: 'string', required: true }
    },
    label: {
      description: 'Label',
      type: 'string'
    },
    isError: {
      description: 'Dropdown has error',
      type: 'boolean'
    },
    error: {
      description: 'Error message',
      type: 'string'
    },
    disabled: {
      description: 'Disabled',
      type: 'boolean'
    },
    size: {
      description: 'Size',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    leftIcon: {
      description: 'Left Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select'
      }
    }
  },
  args: {
    name: 'dropdown',
    size: 'md',
    options: Array.from({ length: 10 }).map((_, index) => ({
      value: index.toString(),
      label: `Option ${index}`
    }))
  }
};

export default meta;

Dropdown.displayName = 'Dropdown';

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {}
};

export const Label: Story = {
  args: {
    label: 'Label'
  }
};

export const WithError: Story = {
  args: {
    label: 'Label',
    isError: true,
    error: 'Error Dropdown'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const InitialValue: Story = {
  args: {
    value: 2
  }
};
