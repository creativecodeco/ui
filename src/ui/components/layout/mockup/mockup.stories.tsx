import type { Meta, StoryObj } from '@storybook/react';
import Mockup from './mockup.component';

const meta: Meta<typeof Mockup> = {
  title: '@creativecodeco-ui/Layout/Mockup',
  component: Mockup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['code', 'browser', 'window', 'phone']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Mockup>;

export const Code: Story = {
  args: {
    type: 'code',
    lines: [
      { id: 1, prefix: '$', text: 'npm install @creativecodeco/ui' },
      { id: 2, prefix: '>', text: 'installing...', className: 'text-warning' },
      { id: 3, prefix: '>', text: 'Done!', className: 'text-success' }
    ]
  }
};

export const Browser: Story = {
  args: {
    type: 'browser',
    url: 'https://creativecode.com.co',
    children: (
      <div className='grid place-content-center'>Hello from Browser</div>
    )
  }
};

export const Window: Story = {
  args: {
    type: 'window',
    children: <div className='grid place-content-center'>Window Content</div>
  }
};
