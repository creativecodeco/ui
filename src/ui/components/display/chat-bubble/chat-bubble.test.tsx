import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatBubble from './chat-bubble.component';

describe('<ChatBubble />', () => {
  it('renders message, header and time', () => {
    render(
      <ChatBubble
        message='Hello there!'
        header='Obi-Wan'
        time='12:45'
        position='start'
      />
    );
    expect(screen.getByText('Hello there!')).toBeInTheDocument();
    expect(screen.getByText('Obi-Wan')).toBeInTheDocument();
    expect(screen.getByText('12:45')).toBeInTheDocument();
  });

  it('applies position and color classes', () => {
    const { container } = render(
      <ChatBubble message='General Kenobi!' position='end' color='primary' />
    );
    const chat = container.querySelector('.chat');
    const bubble = container.querySelector('.chat-bubble');
    expect(chat).toHaveClass('chat-end');
    expect(bubble).toHaveClass('chat-bubble-primary');
  });
});
