import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './select.component';

describe('<Select />', () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' }
  ];

  it('renders label, placeholder and options', () => {
    const handleChange = jest.fn();
    render(
      <Select
        id='framework'
        label='Framework'
        placeholder='Pick a framework'
        options={options}
        value='react'
        color='primary'
        onChange={handleChange}
      />
    );
    expect(screen.getByLabelText('Framework')).toHaveClass(
      'select',
      'select-primary'
    );
    expect(screen.getByText('Pick a framework')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Framework'), {
      target: { value: 'vue' }
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays error message and applies select-error class', () => {
    render(
      <Select
        id='fw'
        label='Framework'
        options={options}
        error='Selection required'
      />
    );
    expect(screen.getByLabelText('Framework')).toHaveClass('select-error');
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });
});
