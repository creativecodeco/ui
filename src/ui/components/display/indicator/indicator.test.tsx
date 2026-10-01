import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Indicator from './indicator.component';

describe('<Indicator />', () => {
  it('renders target children and indicator content', () => {
    render(
      <Indicator content='NEW' color='secondary' position='top-start'>
        <button type='button'>Inbox</button>
      </Indicator>
    );
    expect(screen.getByText('Inbox')).toBeInTheDocument();
    expect(screen.getByText('NEW')).toBeInTheDocument();
    expect(screen.getByText('NEW')).toHaveClass(
      'badge-secondary',
      'indicator-top',
      'indicator-start'
    );
  });
});
