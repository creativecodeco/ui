import cls from 'classnames';

import type { FooterType } from '@/types';

const Footer = ({
  sections = [],
  aside,
  center = false,
  horizontal = true,
  children,
  className
}: FooterType) => {
  return (
    <footer
      className={cls(
        'footer bg-base-200 text-base-content p-10',
        {
          'footer-center': center,
          'sm:footer-horizontal': horizontal,
          'footer-vertical': !horizontal
        },
        className
      )}
    >
      {aside && <aside>{aside}</aside>}
      {sections.map((section, index) => (
        <nav key={section.id ?? index}>
          {section.title && <h6 className='footer-title'>{section.title}</h6>}
          {section.links?.map((link, linkIdx) => (
            <a
              key={link.id ?? linkIdx}
              href={link.href}
              onClick={link.onClick}
              className='link link-hover'
            >
              {link.label}
            </a>
          ))}
          {section.content}
        </nav>
      ))}
      {children}
    </footer>
  );
};

export default Footer;
