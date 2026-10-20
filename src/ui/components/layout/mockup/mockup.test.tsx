import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mockup from './mockup.component';

describe('<Mockup />', () => {
  it('renders code mockup with lines and prefixes', () => {
    const { container } = render(
      <Mockup
        type='code'
        lines={[
          { id: 1, prefix: '$', text: 'npm i @creativecodeco/ui' },
          { id: 2, prefix: '>', text: 'Done!' }
        ]}
      />
    );
    expect(container.querySelector('.mockup-code')).toBeInTheDocument();
    expect(screen.getByText('npm i @creativecodeco/ui')).toBeInTheDocument();
    expect(screen.getByText('Done!')).toBeInTheDocument();
  });

  it('renders browser mockup with URL toolbar', () => {
    render(
      <Mockup type='browser' url='https://example.com'>
        <p>Browser Content</p>
      </Mockup>
    );
    expect(screen.getByText('https://example.com')).toBeInTheDocument();
    expect(screen.getByText('Browser Content')).toBeInTheDocument();
  });

  it('renders window and phone mockups', () => {
    const { container, rerender } = render(
      <Mockup type='window'>Window Body</Mockup>
    );
    expect(container.querySelector('.mockup-window')).toBeInTheDocument();
    expect(screen.getByText('Window Body')).toBeInTheDocument();

    rerender(<Mockup type='phone'>Phone Screen</Mockup>);
    expect(container.querySelector('.mockup-phone')).toBeInTheDocument();
    expect(screen.getByText('Phone Screen')).toBeInTheDocument();
  });
});
