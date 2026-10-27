import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FaChartLine } from 'react-icons/fa';

import Stat from './stat.component';

describe('<Stat />', () => {
  it('renders title, value and description', () => {
    render(
      <Stat
        title='Total Downloads'
        value='31K'
        description='Jan 1st - Feb 1st'
        icon={FaChartLine}
        color='primary'
      />
    );
    expect(screen.getByText('Total Downloads')).toBeInTheDocument();
    expect(screen.getByText('31K')).toBeInTheDocument();
    expect(screen.getByText('Jan 1st - Feb 1st')).toBeInTheDocument();
  });

  it('renders stat actions when provided', () => {
    const { container } = render(
      <Stat
        title='Balance'
        value='$100'
        color='neutral'
        actions={<button>Withdraw</button>}
      />
    );
    expect(container.querySelector('.stat-actions')).toBeInTheDocument();
    expect(screen.getByText('Withdraw')).toBeInTheDocument();
  });
});
