import type { Meta, StoryObj } from '@storybook/react';
import Validator from './validator.component';

const meta: Meta<typeof Validator> = {
  title: '@creativecodeco-ui/Form/Validator',
  component: Validator,
  tags: ['autodocs'],
  argTypes: {
    invalid: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Validator>;

export const Default: Story = {
  args: {
    hint: 'Enter a valid email address',
    invalid: false,
    children: (
      <input
        type='email'
        required
        placeholder='mail@site.com'
        className='input w-full'
      />
    )
  }
};

export const InvalidState: Story = {
  args: {
    hint: 'Username must be at least 3 characters',
    invalid: true,
    children: <input type='text' defaultValue='ab' className='input w-full' />
  }
};
