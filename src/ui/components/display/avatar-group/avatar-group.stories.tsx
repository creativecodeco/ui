import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './avatar-group.component';

const meta: Meta<typeof AvatarGroup> = {
  title: '@creativecodeco-ui/Display/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    size: 'md',
    max: 3,
    avatars: [
      {
        id: 1,
        src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      },
      {
        id: 2,
        src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      },
      {
        id: 3,
        src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      },
      {
        id: 4,
        src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      },
      {
        id: 5,
        src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      }
    ]
  }
};
