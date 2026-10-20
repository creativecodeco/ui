import type { Meta, StoryObj } from '@storybook/react';
import Label from './label.component';

const meta: Meta<typeof Label> = {
  title: '@creativecodeco-ui/Form/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    floating: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Email Address',
    floating: false
  }
};

export const FloatingLabel: Story = {
  args: {
    text: 'Your Email',
    floating: true,
    children: (
      <input
        type='email'
        placeholder='mail@site.com'
        className='input input-md'
      />
    )
  }
};
