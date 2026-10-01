import type { Meta, StoryObj } from '@storybook/react';
import Diff from './diff.component';

const meta: Meta<typeof Diff> = {
  title: '@creativecodeco-ui/Feedback/Diff',
  component: Diff,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Diff>;

export const Default: Story = {
  args: {
    aspectRatio: '16/9',
    item1: (
      <img
        alt='Before'
        src='https://img.daisyui.com/images/stock/photo-1560703650-ef3e0f254ae0.webp'
      />
    ),
    item2: (
      <img
        alt='After'
        src='https://img.daisyui.com/images/stock/photo-1560703650-ef3e0f254ae0-blur.webp'
      />
    )
  }
};
