import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from './tooltip.component';

describe('<Tooltip />', () => {
  it('renders wrapped target children and tooltip data-tip', () => {
    const { container } = render(
      <Tooltip content='Tooltip text'>
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    const tooltipElement = container.querySelector('.tooltip');
    expect(tooltipElement).toHaveAttribute('data-tip', 'Tooltip text');
    expect(tooltipElement).toHaveClass('tooltip-top');
  });

  it('applies position and color classes', () => {
    const { container } = render(
      <Tooltip content='Bottom Tip' position='bottom' color='primary'>
        <span>Target</span>
      </Tooltip>
    );
    const tooltipElement = container.querySelector('.tooltip');
    expect(tooltipElement).toHaveClass('tooltip-bottom');
    expect(tooltipElement).toHaveClass('tooltip-primary');
  });
});
