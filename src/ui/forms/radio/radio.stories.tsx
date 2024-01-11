import type { Meta, StoryObj } from '@storybook/react';

import Radio from './radio.component';

const meta: Meta<typeof Radio> = {
  title: '@creativecodeco-ui/Form/Radio',
  component: Radio,
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
    checked: {
      description: 'Checked',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' }
      }
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
    name: 'radio',
    position: 'left',
    size: 'md'
  }
};

export default meta;

Radio.displayName = 'Radio';

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    name: 'radio-primary'
  }
};

export const Checked: Story = {
  args: {
    name: 'radio-checked',
    checked: true
  }
};

export const Label: Story = {
  args: {
    name: 'radio-label',
    label: 'Eres humano?',
    checked: true
  }
};

export const Left: Story = {
  args: {
    name: 'radio-left',
    label: 'Eres humano?',
    position: 'left'
  }
};

export const Right: Story = {
  args: {
    name: 'radio-right',
    label: 'Eres humano?',
    position: 'right'
  }
};

export const Disabled: Story = {
  args: {
    name: 'radio-disabled',
    label: 'Eres humano?',
    disabled: true
  }
};

export const ColorPrimary: Story = {
  args: {
    name: 'radio-color-primary',
    label: 'Eres humano?',
    color: 'primary',
    checked: true
  }
};

export const ColorSecondary: Story = {
  args: {
    name: 'radio-color-secondary',
    label: 'Eres humano?',
    color: 'secondary',
    checked: true
  }
};

export const ColorAccent: Story = {
  args: {
    name: 'radio-color-accent',
    label: 'Eres humano?',
    color: 'accent',
    checked: true
  }
};

export const ColorSuccess: Story = {
  args: {
    name: 'radio-color-success',
    label: 'Eres humano?',
    color: 'success',
    checked: true
  }
};

export const ColorWarning: Story = {
  args: {
    name: 'radio-color-warning',
    label: 'Eres humano?',
    color: 'warning',
    checked: true
  }
};

export const ColorInfo: Story = {
  args: {
    name: 'radio-color-info',
    label: 'Eres humano?',
    color: 'info',
    checked: true
  }
};

export const ColorError: Story = {
  args: {
    name: 'radio-color-error',
    label: 'Eres humano?',
    color: 'error',
    checked: true
  }
};

export const SizeXs: Story = {
  args: {
    name: 'radio-size-xs',
    size: 'xs',
    checked: true
  }
};

export const SizeSm: Story = {
  args: {
    name: 'radio-size-sm',
    size: 'sm',
    checked: true
  }
};

export const SizeMd: Story = {
  args: {
    name: 'radio-size-md',
    size: 'md',
    checked: true
  }
};

export const SizeLg: Story = {
  args: {
    name: 'radio-size-lg',
    size: 'lg',
    checked: true
  }
};
