import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar.component';

const imageAvatar = 'https://www.creativecode.com.co/wp-content/uploads/2020/07/Avatar-CC.png'

const meta: Meta<typeof Avatar> = {
  title: '@creativecodeco-ui/Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      description: 'Source',
      type: 'string'
    },
    withStatus: {
      description: 'With Status',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    isOnline: {
      description: 'Is Online',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    rounded: {
      description: 'Rounded',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    ring: {
      description: 'Ring',
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
    }
  },
  args: {
    size: 'md',
    src: 'First Name'
  }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {}
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

export const Image: Story = {
  args: {
    src: imageAvatar
  }
};

export const Rounded: Story = {
  args: {
    src: imageAvatar,
    rounded: true
  }
};

export const RoundedOnline: Story = {
  args: {
    src: imageAvatar,
    rounded: true,
    withStatus: true,
    isOnline: true
  }
};

export const RoundedOffline: Story = {
  args: {
    src: imageAvatar,
    rounded: true,
    withStatus: true
  }
};

export const RoundedRing: Story = {
  args: {
    src: imageAvatar,
    rounded: true,
    ring: true
  }
};

export const WithStatusOnline: Story = {
  args: {
    src: imageAvatar,
    withStatus: true,
    isOnline: true
  }
};

export const WithStatusOffline: Story = {
  args: {
    src: imageAvatar,
    withStatus: true
  }
};
