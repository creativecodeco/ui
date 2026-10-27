import type { Meta, StoryObj } from '@storybook/react';
import Alert from './alert.component';

const meta: Meta<typeof Alert> = {
  title: '@creativecodeco-ui/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error']
    },
    variant: {
      control: 'select',
      options: ['soft', 'outline', 'dash']
    },
    vertical: {
      control: 'boolean'
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

export const Soft: Story = {
  args: {
    status: 'info',
    variant: 'soft',
    title: 'Soft Alert',
    children: 'DaisyUI v5 alert-soft style variant.'
  }
};

export const Outline: Story = {
  args: {
    status: 'warning',
    variant: 'outline',
    title: 'Outline Alert',
    children: 'DaisyUI v5 alert-outline style variant.'
  }
};

export const Dash: Story = {
  args: {
    status: 'error',
    variant: 'dash',
    title: 'Dashed Alert',
    children: 'DaisyUI v5 alert-dash style variant.'
  }
};

export const Vertical: Story = {
  args: {
    status: 'info',
    vertical: true,
    title: 'Vertical Layout',
    children: 'Alert content stacked vertically.'
  }
};
