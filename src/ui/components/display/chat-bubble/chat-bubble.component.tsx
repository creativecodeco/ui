import cls from 'classnames';

import type { ChatBubbleType } from '@/types';

const ChatBubble = ({
  message,
  position = 'start',
  color,
  avatar,
  header,
  time,
  footer,
  className
}: ChatBubbleType) => {
  return (
    <div
      className={cls(
        'chat',
        {
          'chat-start': position === 'start',
          'chat-end': position === 'end'
        },
        className
      )}
    >
      {avatar && (
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            {typeof avatar === 'string' ? (
              <img src={avatar} alt='Avatar' />
            ) : (
              avatar
            )}
          </div>
        </div>
      )}

      {(header || time) && (
        <div className='chat-header text-xs gap-1 opacity-75'>
          {header}
          {time && <time className='ml-1 text-xs opacity-50'>{time}</time>}
        </div>
      )}

      <div
        className={cls('chat-bubble', {
          [`chat-bubble-${color}`]: Boolean(color)
        })}
      >
        {message}
      </div>

      {footer && (
        <div className='chat-footer text-xs opacity-50 mt-1'>{footer}</div>
      )}
    </div>
  );
};

export default ChatBubble;
