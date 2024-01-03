import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar.component';

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
      type: 'boolean'
    },
    isOnline: {
      description: 'Is Online',
      type: 'boolean'
    },
    rounded: {
      description: 'Rounded',
      type: 'boolean'
    },
    ring: {
      description: 'Ring',
      type: 'boolean'
    },
    size: {
      description: 'Size',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      defaultValue: 'md'
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
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  }
};

export const Rounded: Story = {
  args: {
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    rounded: true
  }
};

export const RoundedOnline: Story = {
  args: {
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    rounded: true,
    withStatus: true,
    isOnline: true
  }
};

export const RoundedOffline: Story = {
  args: {
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    rounded: true,
    withStatus: true
  }
};

export const RoundedRing: Story = {
  args: {
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    rounded: true,
    ring: true
  }
};

export const WithStatusOnline: Story = {
  args: {
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    withStatus: true,
    isOnline: true
  }
};

export const WithStatusOffline: Story = {
  args: {
    src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    withStatus: true
  }
};
