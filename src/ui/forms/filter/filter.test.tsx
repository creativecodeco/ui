import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './filter.component';

describe('<Filter />', () => {
  const options = [
    { value: 'ui', label: 'UI' },
    { value: 'forms', label: 'Forms' }
  ];

  it('renders filter radio buttons and reset option', () => {
    const handleChange = jest.fn();
    render(
      <Filter
        name='category'
        options={options}
        value='ui'
        onChange={handleChange}
      />
    );
    expect(screen.getByRole('radio', { name: 'UI' })).toBeChecked();
    fireEvent.click(screen.getByRole('radio', { name: 'Forms' }));
    expect(handleChange).toHaveBeenCalledWith('forms');

    fireEvent.click(screen.getByRole('radio', { name: 'All' }));
    expect(handleChange).toHaveBeenCalledWith('');
  });
});
