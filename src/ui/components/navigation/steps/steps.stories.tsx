import type { Meta, StoryObj } from '@storybook/react';
import Steps from './steps.component';

const meta: Meta<typeof Steps> = {
  title: '@creativecodeco-ui/Navigation/Steps',
  component: Steps,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    activeStep: 1,
    items: [
      { title: 'Personal Info' },
      { title: 'Account Setup' },
      { title: 'Confirmation' }
    ]
  }
};
