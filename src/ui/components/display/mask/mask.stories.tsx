import type { Meta, StoryObj } from '@storybook/react';
import Mask from './mask.component';

const meta: Meta<typeof Mask> = {
  title: '@creativecodeco-ui/Display/Mask',
  component: Mask,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: [
        'squircle',
        'heart',
        'hexagon',
        'hexagon-2',
        'decagon',
        'pentagon',
        'diamond',
        'square',
        'circle',
        'star',
        'star-2',
        'triangle'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Mask>;

export const Default: Story = {
  args: {
    shape: 'squircle',
    src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    className: 'w-24 h-24'
  }
};

export const HeartShape: Story = {
  args: {
    shape: 'heart',
    src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    className: 'w-24 h-24'
  }
};
