import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Steps from './steps.component';

describe('<Steps />', () => {
  const items = [
    { title: 'Register' },
    { title: 'Choose Plan' },
    { title: 'Payment' }
  ];

  it('renders all steps titles', () => {
    render(<Steps items={items} activeStep={1} />);
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByText('Choose Plan')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('applies step-primary to completed steps', () => {
    const { container } = render(<Steps items={items} activeStep={1} />);
    const stepElements = container.querySelectorAll('.step');
    expect(stepElements[0]).toHaveClass('step-primary');
    expect(stepElements[1]).toHaveClass('step-primary');
    expect(stepElements[2]).not.toHaveClass('step-primary');
  });
});
