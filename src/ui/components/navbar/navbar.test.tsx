import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './navbar.component';

describe('<Navbar />', () => {
  it('renders brand and content sections', () => {
    render(
      <Navbar
        brand='CreativeCode'
        centerContent={<span>Center Menu</span>}
        endContent={<button>Login</button>}
      />
    );
    expect(screen.getByText('CreativeCode')).toBeInTheDocument();
    expect(screen.getByText('Center Menu')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
