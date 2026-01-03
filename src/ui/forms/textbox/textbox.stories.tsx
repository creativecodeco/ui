import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from 'react-icons/fa';

import TextBox from './textbox.component';

const meta: Meta<typeof TextBox> = {
  title: '@creativecodeco-ui/Form/TextBox',
  component: TextBox,
  argTypes: {
    name: {
      description: 'Unique Name',
      type: { name: 'string', required: true }
    },
    label: { description: 'Label', type: 'string' },
    isError: { description: 'TextBox has error', type: 'boolean' },
    error: { description: 'Error message', type: 'string' },
    disabled: { description: 'Disabled', type: 'boolean' },
    size: {
      description: 'Size',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'md' } }
    },
    leftIcon: {
      description: 'Left Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: { type: 'select' }
    },
    rightIcon: {
      description: 'Right Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: { type: 'select' }
    },
    rightButton: { description: 'Right Button', type: 'boolean' }
  },
  args: { size: 'md' }
};

export default meta;

TextBox.displayName = 'TextBox';

type Story = StoryObj<typeof TextBox>;

export const Primary: Story = { args: { name: 'txtPrimary' } };

export const Label: Story = { args: { name: 'txtLabel', label: 'Label Text' } };

export const SizeXs: Story = { args: { name: 'txtSizeXs', size: 'xs' } };

export const SizeSm: Story = { args: { name: 'txtSizeSm', size: 'sm' } };

export const SizeMd: Story = { args: { name: 'txtSizeMd', size: 'md' } };

export const SizeLg: Story = { args: { name: 'txtSizeLg', size: 'lg' } };

export const LeftIcon: Story = {
  args: { name: 'txtLeftIcon', leftIcon: Icons.FaPhoneAlt }
};

export const RightIcon: Story = {
  args: { name: 'txtRightIcon', rightIcon: Icons.FaPhone }
};

export const RightIconButton: Story = {
  args: {
    name: 'txtRightIconButton',
    rightIcon: Icons.FaSortDown,
    rightButton: true,
    onClick: () => alert('Click')
  }
};

export const ColorPrimary: Story = {
  args: { name: 'txtColorPrimary', color: 'primary' }
};

export const ColorSecondary: Story = {
  args: { name: 'txtColorSecondary', color: 'secondary' }
};

export const ColorAccent: Story = {
  args: { name: 'txtColorAccent', color: 'accent' }
};

export const ColorSuccess: Story = {
  args: { name: 'txtColorSuccess', color: 'success' }
};

export const ColorWarning: Story = {
  args: { name: 'txtColorWarning', color: 'warning' }
};

export const ColorInfo: Story = {
  args: { name: 'txtColorInfo', color: 'info' }
};

export const ColorError: Story = {
  args: { name: 'txtColorError', color: 'error' }
};
