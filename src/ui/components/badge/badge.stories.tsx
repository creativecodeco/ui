import * as Icons from 'react-icons/fa';

import type { Meta, StoryObj } from '@storybook/react';

import Badge from './badge.component';

const meta: Meta<typeof Badge> = {
  title: '@creativecodeco-ui/Components/Badge',
  component: Badge,
  argTypes: {
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
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    outline: {
      description: 'Is Outline',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
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
    icon: {
      description: 'Left Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select'
      }
    },
    iconPosition: {
      description: 'Icon Position',
      type: 'string',
      options: ['left', 'right'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'left' }
      }
    }
  },
  args: {
    size: 'md',
    children: 'Badge',
    iconPosition: 'left'
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {}
};

export const Outline: Story = {
  args: {
    outline: true
  }
};

export const IconLeft: Story = {
  args: {
    icon: Icons.FaAd
  }
};

export const IconRight: Story = {
  args: {
    icon: Icons.FaAd,
    iconPosition: 'right'
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

export const ColorPrimaryOutline: Story = {
  args: {
    color: 'primary',
    outline: true
  }
};

export const ColorSecondaryOutline: Story = {
  args: {
    color: 'secondary',
    outline: true
  }
};

export const ColorAccentOutline: Story = {
  args: {
    color: 'accent',
    outline: true
  }
};

export const ColorSuccessOutline: Story = {
  args: {
    color: 'success',
    outline: true
  }
};

export const ColorWarningOutline: Story = {
  args: {
    color: 'warning',
    outline: true
  }
};

export const ColorInfoOutline: Story = {
  args: {
    color: 'info',
    outline: true
  }
};

export const ColorErrorOutline: Story = {
  args: {
    color: 'error',
    outline: true
  }
};
