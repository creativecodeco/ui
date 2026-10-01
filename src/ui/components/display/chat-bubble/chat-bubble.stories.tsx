import type { Meta, StoryObj } from '@storybook/react';
import ChatBubble from './chat-bubble.component';

const meta: Meta<typeof ChatBubble> = {
  title: '@creativecodeco-ui/Display/ChatBubble',
  component: ChatBubble,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'success',
        'warning',
        'info',
        'error'
      ]
    },
    position: { control: 'select', options: ['start', 'end'] }
  }
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const Default: Story = {
  args: {
    message: 'It is over Anakin, I have the high ground!',
    header: 'Obi-Wan Kenobi',
    time: '12:45',
    position: 'start',
    color: 'primary',
    avatar:
      'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  }
};

export const Conversation: Story = {
  render: () => (
    <div className='flex flex-col gap-3 w-full max-w-md'>
      <ChatBubble
        position='start'
        color='secondary'
        header='Obi-Wan'
        time='12:45'
        message='You were the Chosen One!'
        avatar='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      />
      <ChatBubble
        position='end'
        color='error'
        header='Anakin'
        time='12:46'
        message='I hate you!'
        footer='Seen 12:46'
      />
    </div>
  )
};
