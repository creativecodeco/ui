import type { Meta, StoryObj } from '@storybook/react';

import Radio from './radio.component';

const meta: Meta<typeof Radio> = {
  title: '@creativecodeco-ui/Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Radio group name' },
    label: { control: 'text', description: 'Radio option label' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: {
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error'
      ]
    },
    position: { control: 'inline-radio', options: ['left', 'right'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isError: { control: 'boolean' },
    error: { control: 'text' }
  },
  args: {
    name: 'radio',
    position: 'left',
    size: 'md'
  }
};

export default meta;

Radio.displayName = 'Radio';

type Story = StoryObj<typeof Radio>;

const createRadioStory = (
  name: string,
  args: Partial<Story['args']> = {}
): Story => ({
  args: { name, ...args }
});

export const Primary: Story = createRadioStory('radio-primary');
export const Checked: Story = createRadioStory('radio-checked', {
  checked: true
});
export const Label: Story = createRadioStory('radio-label', {
  label: 'Eres humano?',
  checked: true
});
export const Left: Story = createRadioStory('radio-left', {
  label: 'Eres humano?',
  position: 'left'
});
export const Right: Story = createRadioStory('radio-right', {
  label: 'Eres humano?',
  position: 'right'
});
export const Disabled: Story = createRadioStory('radio-disabled', {
  label: 'Eres humano?',
  disabled: true
});

export const ColorNeutral: Story = createRadioStory('radio-color-neutral', {
  label: 'Eres humano?',
  color: 'neutral',
  checked: true
});
export const ColorPrimary: Story = createRadioStory('radio-color-primary', {
  label: 'Eres humano?',
  color: 'primary',
  checked: true
});
export const ColorSecondary: Story = createRadioStory('radio-color-secondary', {
  label: 'Eres humano?',
  color: 'secondary',
  checked: true
});
export const ColorAccent: Story = createRadioStory('radio-color-accent', {
  label: 'Eres humano?',
  color: 'accent',
  checked: true
});
export const ColorSuccess: Story = createRadioStory('radio-color-success', {
  label: 'Eres humano?',
  color: 'success',
  checked: true
});
export const ColorWarning: Story = createRadioStory('radio-color-warning', {
  label: 'Eres humano?',
  color: 'warning',
  checked: true
});
export const ColorInfo: Story = createRadioStory('radio-color-info', {
  label: 'Eres humano?',
  color: 'info',
  checked: true
});
export const ColorError: Story = createRadioStory('radio-color-error', {
  label: 'Eres humano?',
  color: 'error',
  checked: true
});

export const SizeXs: Story = createRadioStory('radio-size-xs', {
  size: 'xs',
  checked: true
});
export const SizeSm: Story = createRadioStory('radio-size-sm', {
  size: 'sm',
  checked: true
});
export const SizeMd: Story = createRadioStory('radio-size-md', {
  size: 'md',
  checked: true
});
export const SizeLg: Story = createRadioStory('radio-size-lg', {
  size: 'lg',
  checked: true
});
export const SizeXl: Story = createRadioStory('radio-size-xl', {
  size: 'xl',
  checked: true
});
