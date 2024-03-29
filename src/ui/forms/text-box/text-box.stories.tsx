import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from 'react-icons/fa';

import TextBox from './text-box.component';

const meta: Meta<typeof TextBox> = {
  title: '@creativecodeco-ui/Form/TextBox',
  component: TextBox,
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
      description: 'TextBox has error',
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
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'md' }
      }
    },
    leftIcon: {
      description: 'Left Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select'
      }
    },
    rightIcon: {
      description: 'Right Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select'
      }
    },
    rightButton: {
      description: 'Right Button',
      type: 'boolean'
    }
  },
  args: {
    name: 'text-box',
    size: 'md'
  }
};

export default meta;

TextBox.displayName = 'TextBox';

type Story = StoryObj<typeof TextBox>;

export const Primary: Story = {
  args: {}
};

export const Label: Story = {
  args: {
    label: 'Label Text'
  }
};

export const SizeXs: Story = {
  args: {
    size: 'xs'
  }
};

export const SizeSm: Story = {
  args: {
    size: 'sm'
  }
};

export const SizeMd: Story = {
  args: {
    size: 'md'
  }
};

export const SizeLg: Story = {
  args: {
    size: 'lg'
  }
};

export const LeftIcon: Story = {
  args: {
    leftIcon: Icons.FaPhoneAlt
  }
};

export const RightIcon: Story = {
  args: {
    rightIcon: Icons.FaPhone
  }
};

export const RightIconButton: Story = {
  args: {
    rightIcon: Icons.FaSortDown,
    rightButton: true,
    onClick: () => alert('Click')
  }
};

export const ColorPrimary: Story = {
  args: {
    color: 'primary'
  }
};

export const ColorSecondary: Story = {
  args: {
    color: 'secondary'
  }
};

export const ColorAccent: Story = {
  args: {
    color: 'accent'
  }
};

export const ColorSuccess: Story = {
  args: {
    color: 'success'
  }
};

export const ColorWarning: Story = {
  args: {
    color: 'warning'
  }
};

export const ColorInfo: Story = {
  args: {
    color: 'info'
  }
};

export const ColorError: Story = {
  args: {
    color: 'error'
  }
};
