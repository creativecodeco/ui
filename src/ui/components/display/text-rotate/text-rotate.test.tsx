import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextRotate from './text-rotate.component';

describe('<TextRotate />', () => {
  it('renders string items inside text-rotate container', () => {
    const { container } = render(
      <TextRotate items={['DESIGN', 'DEVELOP', 'DEPLOY']} />
    );
    expect(container.querySelector('.text-rotate')).toBeInTheDocument();
    expect(screen.getByText('DESIGN')).toBeInTheDocument();
    expect(screen.getByText('DEVELOP')).toBeInTheDocument();
    expect(screen.getByText('DEPLOY')).toBeInTheDocument();
  });

  it('renders object items with custom classes', () => {
    render(
      <TextRotate
        items={[
          {
            id: '1',
            content: 'Fast',
            className: 'bg-primary text-primary-content'
          },
          {
            id: '2',
            content: 'Accessible',
            className: 'bg-secondary text-secondary-content'
          }
        ]}
      />
    );
    expect(screen.getByText('Fast')).toHaveClass('bg-primary');
    expect(screen.getByText('Accessible')).toHaveClass('bg-secondary');
  });
});
