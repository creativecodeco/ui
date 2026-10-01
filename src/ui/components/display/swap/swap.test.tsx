import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Swap from './swap.component';

describe('<Swap />', () => {
  it('renders ON and OFF content', () => {
    render(<Swap onContent='SUN' offContent='MOON' active={true} />);
    expect(screen.getByText('SUN')).toBeInTheDocument();
    expect(screen.getByText('MOON')).toBeInTheDocument();
  });

  it('triggers onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Swap onContent='ON' offContent='OFF' onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
