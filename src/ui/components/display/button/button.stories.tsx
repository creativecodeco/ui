import React from 'react';
import * as Icons from 'react-icons/fa';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/ui/components';

import Button from './button.component';

const meta: Meta<typeof Button> = {
  title: '@creativecodeco-ui/Display/Button',
  component: Button,
  argTypes: {
    isLink: {
      description: 'Is Link',
      type: 'boolean',
      table: { type: { summary: 'boolean' } }
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
    },
    disabled: {
      description: 'Disabled',
      type: 'boolean',
      table: { type: { summary: 'boolean' } }
    },
    loading: {
      description: 'Loading',
      type: 'boolean',
      table: { type: { summary: 'boolean' } }
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

const createBtnStory = (args: Story['args'] = {}): Story => ({ args });

export const Primary: Story = createBtnStory();

export const WithBadge: Story = createBtnStory({
  children: (
    <>
      Button
      <Badge color='primary'>+100</Badge>
    </>
  )
});

export const Outline: Story = createBtnStory({ outline: true });
export const Link: Story = createBtnStory({ isLink: true });
export const Loading: Story = createBtnStory({ loading: true });
export const LoadingLabel: Story = createBtnStory({
  loading: true,
  loadingLabel: 'Loading...'
});

export const IconLeft: Story = createBtnStory({ icon: Icons.FaAd });
export const IconRight: Story = createBtnStory({
  icon: Icons.FaAd,
  iconPosition: 'right'
});

export const SizeXs: Story = createBtnStory({ size: 'xs' });
export const SizeSm: Story = createBtnStory({ size: 'sm' });
export const SizeMd: Story = createBtnStory({ size: 'md' });
export const SizeLg: Story = createBtnStory({ size: 'lg' });

export const ColorPrimary: Story = createBtnStory({ color: 'primary' });
export const ColorSecondary: Story = createBtnStory({ color: 'secondary' });
export const ColorAccent: Story = createBtnStory({ color: 'accent' });
export const ColorSuccess: Story = createBtnStory({ color: 'success' });
export const ColorWarning: Story = createBtnStory({ color: 'warning' });
export const ColorInfo: Story = createBtnStory({ color: 'info' });
export const ColorError: Story = createBtnStory({ color: 'error' });
export const ColorGhost: Story = createBtnStory({ color: 'ghost' });
export const ColorNeutral: Story = createBtnStory({ color: 'neutral' });

export const ColorPrimaryOutline: Story = createBtnStory({
  color: 'primary',
  outline: true
});
export const ColorSecondaryOutline: Story = createBtnStory({
  color: 'secondary',
  outline: true
});
export const ColorAccentOutline: Story = createBtnStory({
  color: 'accent',
  outline: true
});
export const ColorSuccessOutline: Story = createBtnStory({
  color: 'success',
  outline: true
});
export const ColorWarningOutline: Story = createBtnStory({
  color: 'warning',
  outline: true
});
export const ColorInfoOutline: Story = createBtnStory({
  color: 'info',
  outline: true
});
export const ColorErrorOutline: Story = createBtnStory({
  color: 'error',
  outline: true
});
export const ColorNeutralOutline: Story = createBtnStory({
  color: 'neutral',
  outline: true
});
export const ColorGhostOutline: Story = createBtnStory({
  color: 'ghost',
  outline: true
});
