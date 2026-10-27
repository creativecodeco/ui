import * as Icons from 'react-icons/fa';

import type { Meta, StoryObj } from '@storybook/react';

import Badge from './badge.component';

const meta: Meta<typeof Badge> = {
  title: '@creativecodeco-ui/Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Badge color token',
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'info',
        'error',
        'ghost'
      ]
    },
    variant: {
      description: 'Badge style variant',
      control: 'select',
      options: ['outline', 'dash', 'soft', 'ghost']
    },
    outline: {
      description: 'Outline style',
      control: 'boolean'
    },
    size: {
      description: 'Badge size',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    icon: {
      description: 'Badge icon component',
      options: Object.keys(Icons),
      mapping: Icons,
      control: 'select'
    },
    iconPosition: {
      description: 'Badge icon placement',
      control: 'inline-radio',
      options: ['left', 'right']
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

const createBadgeStory = (args: Story['args'] = {}): Story => ({ args });

export const Primary: Story = createBadgeStory();
export const Outline: Story = createBadgeStory({ outline: true });
export const IconLeft: Story = createBadgeStory({ icon: Icons.FaAd });
export const IconRight: Story = createBadgeStory({
  icon: Icons.FaAd,
  iconPosition: 'right'
});

export const SizeXs: Story = createBadgeStory({ size: 'xs' });
export const SizeSm: Story = createBadgeStory({ size: 'sm' });
export const SizeMd: Story = createBadgeStory({ size: 'md' });
export const SizeLg: Story = createBadgeStory({ size: 'lg' });
export const SizeXl: Story = createBadgeStory({ size: 'xl' });

export const Soft: Story = createBadgeStory({
  color: 'primary',
  variant: 'soft'
});
export const Dash: Story = createBadgeStory({
  color: 'primary',
  variant: 'dash'
});
export const Ghost: Story = createBadgeStory({ variant: 'ghost' });

export const ColorNeutral: Story = createBadgeStory({ color: 'neutral' });
export const ColorPrimary: Story = createBadgeStory({ color: 'primary' });
export const ColorSecondary: Story = createBadgeStory({ color: 'secondary' });
export const ColorAccent: Story = createBadgeStory({ color: 'accent' });
export const ColorSuccess: Story = createBadgeStory({ color: 'success' });
export const ColorWarning: Story = createBadgeStory({ color: 'warning' });
export const ColorInfo: Story = createBadgeStory({ color: 'info' });
export const ColorError: Story = createBadgeStory({ color: 'error' });

export const ColorPrimaryOutline: Story = createBadgeStory({
  color: 'primary',
  outline: true
});
export const ColorSecondaryOutline: Story = createBadgeStory({
  color: 'secondary',
  outline: true
});
export const ColorAccentOutline: Story = createBadgeStory({
  color: 'accent',
  outline: true
});
export const ColorSuccessOutline: Story = createBadgeStory({
  color: 'success',
  outline: true
});
export const ColorWarningOutline: Story = createBadgeStory({
  color: 'warning',
  outline: true
});
export const ColorInfoOutline: Story = createBadgeStory({
  color: 'info',
  outline: true
});
export const ColorErrorOutline: Story = createBadgeStory({
  color: 'error',
  outline: true
});
