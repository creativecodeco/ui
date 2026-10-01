import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './breadcrumb.component';

const meta: Meta<typeof Breadcrumb> = {
  title: '@creativecodeco-ui/Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Breadcrumb' }
    ]
  }
};
