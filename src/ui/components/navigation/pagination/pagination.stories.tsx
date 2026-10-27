import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './pagination.component';

const meta: Meta<typeof Pagination> = {
  title: '@creativecodeco-ui/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }
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

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <Pagination
        currentPage={2}
        totalPages={5}
        size='xs'
        onPageChange={() => {}}
      />
      <Pagination
        currentPage={2}
        totalPages={5}
        size='sm'
        onPageChange={() => {}}
      />
      <Pagination
        currentPage={2}
        totalPages={5}
        size='md'
        onPageChange={() => {}}
      />
      <Pagination
        currentPage={2}
        totalPages={5}
        size='lg'
        onPageChange={() => {}}
      />
      <Pagination
        currentPage={2}
        totalPages={5}
        size='xl'
        onPageChange={() => {}}
      />
    </div>
  )
};
