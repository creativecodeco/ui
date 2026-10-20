import type { Meta, StoryObj } from '@storybook/react';
import Fieldset from './fieldset.component';

const meta: Meta<typeof Fieldset> = {
  title: '@creativecodeco-ui/Form/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    legend: 'Account Details',
    label: 'All fields are encrypted',
    className: 'w-xs',
    children: (
      <input
        type='text'
        className='input w-full'
        placeholder='Enter username'
      />
    )
  }
};
