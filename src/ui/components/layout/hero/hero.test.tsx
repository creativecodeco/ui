import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './hero.component';

describe('<Hero />', () => {
  it('renders title, description and actions', () => {
    render(
      <Hero
        title='Welcome to CreativeCode'
        description='Building modern design systems'
        actions={<button type='button'>Get Started</button>}
      />
    );
    expect(screen.getByText('Welcome to CreativeCode')).toBeInTheDocument();
    expect(
      screen.getByText('Building modern design systems')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Get Started' })
    ).toBeInTheDocument();
  });
});
