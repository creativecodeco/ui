import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer.component';

describe('<Footer />', () => {
  it('renders sections, titles, links and aside content', () => {
    render(
      <Footer
        aside={<p>CreativeCode Co.</p>}
        sections={[
          {
            id: 'services',
            title: 'Services',
            links: [
              { id: 'branding', label: 'Branding', href: '#branding' },
              { id: 'design', label: 'Design', href: '#design' }
            ]
          }
        ]}
      />
    );
    expect(screen.getByText('CreativeCode Co.')).toBeInTheDocument();
    expect(screen.getByText('Services')).toHaveClass('footer-title');
    expect(screen.getByText('Branding')).toHaveClass('link', 'link-hover');
  });

  it('applies center and vertical classes when configured', () => {
    const { container } = render(
      <Footer center horizontal={false}>
        <p>Copyright 2026</p>
      </Footer>
    );
    expect(container.querySelector('footer')).toHaveClass(
      'footer',
      'footer-center',
      'footer-vertical'
    );
  });
});
