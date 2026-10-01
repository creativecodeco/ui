import * as Icons from 'react-icons/fa';

import type { Meta, StoryObj } from '@storybook/react';

import Badge from './badge.component';

const meta: Meta<typeof Badge> = {
  title: '@creativecodeco-ui/Display/Badge',
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
      table: { type: { summary: 'string' } }
    },
    outline: {
      description: 'Is Outline',
      type: 'boolean',
      table: { type: { summary: 'boolean' } }
    },
    size: {
      description: 'Size',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'md' } }
    },
    icon: {
      description: 'Left Icon',
      type: 'function',
      options: Object.keys(Icons),
      mapping: Icons,
      control: { type: 'select' }
    },
    iconPosition: {
      description: 'Icon Position',
      type: 'string',
      options: ['left', 'right'],
      control: { type: 'radio' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'left' } }
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
