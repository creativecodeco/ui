import type { Meta, StoryObj } from '@storybook/react';
import Alert from './alert.component';

const meta: Meta<typeof Alert> = {
  title: '@creativecodeco-ui/Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    status: 'info',
    title: 'Information',
    children: 'This is an informative alert message.'
  }
};

export const Success: Story = {
  args: {
    status: 'success',
    title: 'Success!',
    children: 'Your changes have been saved successfully.'
  }
};

export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'Warning',
    children: 'Please check your input values before proceeding.'
  }
};

export const ErrorAlert: Story = {
  args: {
    status: 'error',
    title: 'Error Encountered',
    children: 'Failed to process request. Please try again later.'
  }
};
