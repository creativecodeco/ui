import * as Icons from 'react-icons/fa';

import type { Meta, StoryObj } from '@storybook/react';

import Button from './button.component';

const meta: Meta<typeof Button> = {
  title: '@creativecodeco-ui/Components/Button',
  component: Button,
  argTypes: {
    isLink: {
      description: 'Is Link',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
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
        'error',
        'ghost',
        'neutral'
      ],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    outline: {
      description: 'Is Link',
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
    },
    disabled: {
      description: 'Disabled',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    loading: {
      description: 'Loading',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    loadingLabel: {
      description: 'Loading Label',
      type: 'string'
    }
  },
  args: {
    size: 'md',
    children: 'Button',
    iconPosition: 'left'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {}
};

export const Outline: Story = {
  args: {
    outline: true
  }
};

export const Link: Story = {
  args: {
    isLink: true
  }
};

export const Loading: Story = {
  args: {
    loading: true
  }
};

export const LoadingLabel: Story = {
  args: {
    loading: true,
    loadingLabel: 'Loading...'
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

export const ColorGhost: Story = {
  args: {
    color: 'ghost'
  }
};

export const ColorNeutral: Story = {
  args: {
    color: 'neutral'
  }
};
