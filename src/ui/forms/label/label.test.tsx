import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './label.component';

describe('<Label />', () => {
  it('renders standard label', () => {
    const { container } = render(
      <Label text='Email Address' htmlFor='email' />
    );
    expect(screen.getByText('Email Address')).toHaveClass('label-text');
    expect(container.querySelector('label')).toHaveClass('label');
  });

  it('renders floating-label wrapper with input', () => {
    const { container } = render(
      <Label text='Your Email' floating>
        <input type='email' placeholder='mail@site.com' className='input' />
      </Label>
    );
    expect(container.querySelector('label')).toHaveClass('floating-label');
    expect(screen.getByText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('mail@site.com')).toBeInTheDocument();
  });
});
