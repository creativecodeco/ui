import cls from 'classnames';

import type { MockupType } from '@/types';

const Mockup = ({
  type = 'code',
  lines = [],
  url = 'https://creativecode.com.co',
  children,
  className
}: MockupType) => {
  if (type === 'code') {
    return (
      <div className={cls('mockup-code w-full', className)}>
        {lines.map((line, index) => (
          <pre
            key={line.id ?? index}
            data-prefix={line.prefix}
            className={line.className}
          >
            <code>{line.text}</code>
          </pre>
        ))}
        {children}
      </div>
    );
  }

  if (type === 'browser') {
    return (
      <div
        className={cls(
          'mockup-browser border-base-300 border w-full',
          className
        )}
      >
        <div className='mockup-browser-toolbar'>
          <div className='input'>{url}</div>
        </div>
        <div className='border-base-300 border-t px-4 py-8'>{children}</div>
      </div>
    );
  }

  if (type === 'phone') {
    return (
      <div className={cls('mockup-phone', className)}>
        <div className='mockup-phone-camera' />
        <div className='mockup-phone-display'>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cls('mockup-window border-base-300 border w-full', className)}
    >
      <div className='border-base-300 border-t px-4 py-8'>{children}</div>
    </div>
  );
};

export default Mockup;
