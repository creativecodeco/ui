import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './checkbox.component';

const meta: Meta<typeof Checkbox> = {
  title: '@creativecodeco-ui/Form/Checkbox',
  component: Checkbox,
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
      description: 'Checkbox has error',
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
        defaultValue: { summary: 'md' }
      }
    }
  },
  args: {
    name: 'checkbox',
    position: 'left',
    size: 'md'
  }
};

export default meta;

Checkbox.displayName = 'Checkbox';

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {}
};

export const Checked: Story = {
  args: {
    checked: true
  }
};

export const Label: Story = {
  args: {
    label: 'Eres humano?',
    checked: true
  }
};

export const Left: Story = {
  args: {
    label: 'Eres humano?',
    position: 'left'
  }
};

export const Right: Story = {
  args: {
    label: 'Eres humano?',
    position: 'right'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Eres humano?',
    disabled: true
  }
};

export const ColorPrimary: Story = {
  args: {
    label: 'Eres humano?',
    color: 'primary',
    checked: true
  }
};

export const ColorSecondary: Story = {
  args: {
    label: 'Eres humano?',
    color: 'secondary',
    checked: true
  }
};

export const ColorAccent: Story = {
  args: {
    label: 'Eres humano?',
    color: 'accent',
    checked: true
  }
};

export const ColorSuccess: Story = {
  args: {
    label: 'Eres humano?',
    color: 'success',
    checked: true
  }
};

export const ColorWarning: Story = {
  args: {
    label: 'Eres humano?',
    color: 'warning',
    checked: true
  }
};

export const ColorInfo: Story = {
  args: {
    label: 'Eres humano?',
    color: 'info',
    checked: true
  }
};

export const ColorError: Story = {
  args: {
    label: 'Eres humano?',
    color: 'error',
    checked: true
  }
};

export const SizeXs: Story = {
  args: {
    size: 'xs',
    checked: true
  }
};

export const SizeSm: Story = {
  args: {
    size: 'sm',
    checked: true
  }
};

export const SizeMd: Story = {
  args: {
    size: 'md',
    checked: true
  }
};

export const SizeLg: Story = {
  args: {
    size: 'lg',
    checked: true
  }
};
