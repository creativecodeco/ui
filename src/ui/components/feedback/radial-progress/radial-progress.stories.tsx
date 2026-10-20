import type { Meta, StoryObj } from '@storybook/react';
import RadialProgress from './radial-progress.component';

const meta: Meta<typeof RadialProgress> = {
  title: '@creativecodeco-ui/Feedback/RadialProgress',
  component: RadialProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadialProgress>;

export const Default: Story = {
  args: {
    value: 70,
    color: 'primary'
  }
};

export const CustomSizeAndThickness: Story = {
  args: {
    value: 85,
    size: '8rem',
    thickness: '0.5rem',
    color: 'success'
  }
};
