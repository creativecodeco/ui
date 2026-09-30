import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './pagination.component';

const meta: Meta<typeof Pagination> = {
  title: '@creativecodeco-ui/Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5
  }
};
