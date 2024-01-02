import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from 'react-icons/fa';

import DropDown from './drop-down.component';

const meta: Meta<typeof DropDown> = {
  title: '@creativecodeco-ui/Form/DropDown',
  component: DropDown,
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
      description: 'DropDown has error',
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
      control: { type: 'select' },
      defaultValue: 'md'
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
    name: 'drop-down',
    size: 'md',
    options: Array.from({ length: 10 }).map((_, index) => ({
      value: index.toString(),
      label: `Option ${index}`
    }))
  }
};

export default meta;

type Story = StoryObj<typeof DropDown>;

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
    error: 'Error DropDown'
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
