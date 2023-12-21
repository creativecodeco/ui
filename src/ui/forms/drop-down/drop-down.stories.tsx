import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from 'react-icons/fa';

import DropDown from './drop-down.component';

const meta: Meta<typeof DropDown> = {
  title: 'CreativeCode.com.co/UI/Form/DropDown',
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
