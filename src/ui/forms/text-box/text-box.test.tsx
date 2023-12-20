import React from 'react';
import { render } from '@testing-library/react';

import TextBox from './text-box.component';

describe('TextBox', () => {
  it('Snapshot', () => {
    const { container } = render(<TextBox name='test' />);

    expect(container).toMatchSnapshot();
  });
});
