import type { Meta, StoryObj } from '@storybook/react';
import Kbd from './kbd.component';

const meta: Meta<typeof Kbd> = {
  title: '@creativecodeco-ui/Display/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: 'Ctrl',
    size: 'md'
  }
};

export const KeyCombination: Story = {
  render: () => (
    <div className='flex items-center gap-1'>
      <Kbd size='sm'>⌘</Kbd>
      <span>+</span>
      <Kbd size='sm'>Shift</Kbd>
      <span>+</span>
      <Kbd size='sm'>P</Kbd>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-3'>
      <Kbd size='xs'>xs</Kbd>
      <Kbd size='sm'>sm</Kbd>
      <Kbd size='md'>md</Kbd>
      <Kbd size='lg'>lg</Kbd>
    </div>
  )
};
