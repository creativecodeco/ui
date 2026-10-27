import type { Meta, StoryObj } from '@storybook/react';
import Modal from './modal.component';

const meta: Meta<typeof Modal> = {
  title: '@creativecodeco-ui/Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    position: {
      control: 'select',
      options: ['top', 'middle', 'bottom', 'start', 'end']
    },
    closeOnBackdropClick: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Header',
    children: 'This is the modal body content.',
    actions: <button className='btn btn-primary'>Save Changes</button>
  }
};

export const Large: Story = {
  args: {
    isOpen: true,
    size: 'lg',
    title: 'Large Modal',
    children:
      'This is a large modal window suitable for detailed content or forms.'
  }
};

export const BottomPosition: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: 'Bottom Sheet Modal',
    children: 'Modal aligned to the bottom using modal-bottom.'
  }
};
