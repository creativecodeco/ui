import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hover3D from './hover-3d.component';

describe('<Hover3D />', () => {
  it('renders child content and 8 3D hover sensor cells', () => {
    const { container } = render(
      <Hover3D>
        <div className='card'>3D Card Content</div>
      </Hover3D>
    );
    expect(screen.getByText('3D Card Content')).toBeInTheDocument();
    const wrapper = container.querySelector('.hover-3d');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.children).toHaveLength(9);
  });
});
