import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Otp from './otp.component';

describe('<Otp />', () => {
  it('renders OTP input with configured slot count and fires onChange', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Otp
        id='code'
        label='Verification Code'
        length={4}
        color='primary'
        joined
        onChange={handleChange}
      />
    );
    const otpLabel = container.querySelector('.otp');
    expect(otpLabel).toHaveClass('otp', 'otp-primary', 'otp-joined');
    expect(otpLabel?.querySelectorAll('span')).toHaveLength(4);

    const input = screen.getByLabelText('Verification Code');
    fireEvent.change(input, { target: { value: '1234' } });
    expect(handleChange).toHaveBeenCalledWith('1234');
  });

  it('renders error message when error prop is set', () => {
    render(<Otp error='Invalid code' />);
    expect(screen.getByText('Invalid code')).toBeInTheDocument();
  });
});
