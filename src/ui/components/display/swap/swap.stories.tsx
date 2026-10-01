import type { Meta, StoryObj } from '@storybook/react';
import Swap from './swap.component';

const meta: Meta<typeof Swap> = {
  title: '@creativecodeco-ui/Display/Swap',
  component: Swap,
  tags: ['autodocs'],
  argTypes: {
    effect: { control: 'select', options: ['rotate', 'flip'] }
  }
};

export default meta;
type Story = StoryObj<typeof Swap>;

export const Default: Story = {
  args: {
    onContent: '🌞 ON',
    offContent: '🌙 OFF',
    effect: 'rotate'
  }
};

export const FlipEffect: Story = {
  args: {
    onContent: 'VOLUME ON',
    offContent: 'MUTED',
    effect: 'flip'
  }
};
