import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Validator from './validator.component';

describe('<Validator />', () => {
  it('renders validator wrapper and hint', () => {
    const { container } = render(
      <Validator hint='Must be a valid email' invalid>
        <input type='email' required placeholder='mail@site.com' />
      </Validator>
    );
    const validator = container.querySelector('.validator');
    expect(validator).toBeInTheDocument();
    expect(validator).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Must be a valid email')).toHaveClass(
      'validator-hint'
    );
  });

  it('renders without aria-invalid when invalid is false', () => {
    const { container } = render(
      <Validator>
        <input type='text' />
      </Validator>
    );
    const validator = container.querySelector('.validator');
    expect(validator).not.toHaveAttribute('aria-invalid');
  });
});
