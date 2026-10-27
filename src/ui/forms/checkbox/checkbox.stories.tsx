import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './checkbox.component';

const meta: Meta<typeof Checkbox> = {
  title: '@creativecodeco-ui/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Checkbox input name' },
    label: { control: 'text', description: 'Checkbox label text' },
    checked: { control: 'boolean' },
    isError: { control: 'boolean' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    position: { control: 'radio', options: ['left', 'right'] },
    color: {
      control: 'select',
      options: [
        'neutral',
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'info',
        'error'
      ]
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  },
  args: {
    name: 'checkbox',
    position: 'left',
    size: 'md',
    label: 'Label'
  }
};

export default meta;

Checkbox.displayName = 'Checkbox';

type Story = StoryObj<typeof Checkbox>;

const createCheckboxStory = (args: Story['args'] = {}): Story => ({ args });

export const Primary: Story = createCheckboxStory();
export const Checked: Story = createCheckboxStory({ checked: true });
export const Label: Story = createCheckboxStory({
  label: 'Eres humano?',
  checked: true
});
export const Left: Story = createCheckboxStory({
  label: 'Eres humano?',
  position: 'left'
});
export const Right: Story = createCheckboxStory({
  label: 'Eres humano?',
  position: 'right'
});
export const Disabled: Story = createCheckboxStory({
  label: 'Eres humano?',
  disabled: true
});

export const ColorNeutral: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'neutral',
  checked: true
});
export const ColorPrimary: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'primary',
  checked: true
});
export const ColorSecondary: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'secondary',
  checked: true
});
export const ColorAccent: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'accent',
  checked: true
});
export const ColorSuccess: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'success',
  checked: true
});
export const ColorWarning: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'warning',
  checked: true
});
export const ColorInfo: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'info',
  checked: true
});
export const ColorError: Story = createCheckboxStory({
  label: 'Eres humano?',
  color: 'error',
  checked: true
});

export const SizeXs: Story = createCheckboxStory({ size: 'xs', checked: true });
export const SizeSm: Story = createCheckboxStory({ size: 'sm', checked: true });
export const SizeMd: Story = createCheckboxStory({ size: 'md', checked: true });
export const SizeLg: Story = createCheckboxStory({ size: 'lg', checked: true });
export const SizeXl: Story = createCheckboxStory({ size: 'xl', checked: true });
