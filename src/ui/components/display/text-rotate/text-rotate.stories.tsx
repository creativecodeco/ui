import type { Meta, StoryObj } from '@storybook/react';
import TextRotate from './text-rotate.component';

const meta: Meta<typeof TextRotate> = {
  title: '@creativecodeco-ui/Display/TextRotate',
  component: TextRotate,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TextRotate>;

export const Default: Story = {
  args: {
    className: 'text-4xl font-bold',
    items: ['DESIGN', 'DEVELOP', 'DEPLOY', 'SCALE']
  }
};

export const HighlightedWords: Story = {
  render: () => (
    <div className='text-2xl font-semibold'>
      Build{' '}
      <TextRotate
        items={[
          {
            id: 1,
            content: 'accessible',
            className: 'bg-primary text-primary-content px-2'
          },
          {
            id: 2,
            content: 'modern',
            className: 'bg-secondary text-secondary-content px-2'
          },
          {
            id: 3,
            content: 'scalable',
            className: 'bg-accent text-accent-content px-2'
          }
        ]}
      />{' '}
      interfaces
    </div>
  )
};
