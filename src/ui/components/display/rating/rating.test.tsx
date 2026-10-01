import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from './rating.component';

describe('<Rating />', () => {
  it('renders default 5 stars', () => {
    const { container } = render(<Rating value={3} name='test-rating' />);
    const inputs = container.querySelectorAll('input[type="radio"]');
    // 1 hidden reset input + 5 rating item inputs
    expect(inputs).toHaveLength(6);
    expect(inputs[3]).toBeChecked(); // 3rd star (index 3)
  });

  it('triggers onChange when a star is clicked', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Rating value={2} onChange={handleChange} name='test-rating-change' />
    );
    const inputs = container.querySelectorAll('input[type="radio"]');
    fireEvent.click(inputs[4]); // Click 4th star
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('supports half star precision', () => {
    const { container } = render(
      <Rating value={2.5} half max={5} name='half-rating' />
    );
    // 1 hidden input + 10 half star inputs
    const inputs = container.querySelectorAll('input[type="radio"]');
    expect(inputs).toHaveLength(11);
  });

  it('respects readonly state', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Rating
        value={3}
        readonly
        onChange={handleChange}
        name='readonly-rating'
      />
    );
    const inputs = container.querySelectorAll('input[type="radio"]');
    fireEvent.click(inputs[1]);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
