import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fieldset from './fieldset.component';

describe('<Fieldset />', () => {
  it('renders legend, children, and helper label', () => {
    render(
      <Fieldset legend='Page title' label='You can edit page title later'>
        <input type='text' className='input' placeholder='My awesome page' />
      </Fieldset>
    );
    expect(screen.getByText('Page title')).toHaveClass('fieldset-legend');
    expect(screen.getByPlaceholderText('My awesome page')).toBeInTheDocument();
    expect(screen.getByText('You can edit page title later')).toHaveClass(
      'fieldset-label'
    );
  });
});
