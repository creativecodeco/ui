import { render } from '@testing-library/react';

import type { AccordionOption, AccordionType } from '@/types';

import Accordion from './accordion.component';

const baseProps: AccordionType = {
  name: 'test',
  options: Array.from({ length: 4 }).map<AccordionOption>((_, index) => ({
    header: <>Header {index}</>,
    body: <p>Body</p>
  }))
};

describe('<Accordion />', () => {
  it('snapshot', () => {
    const { container } = render(<Accordion {...baseProps} />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot all props', () => {
    const { container } = render(
      <Accordion {...baseProps} iconType='plus' multiple join />
    );

    expect(container).toMatchSnapshot();
  });

  it('options - single', () => {
    const { getAllByRole } = render(<Accordion {...baseProps} />);

    expect(getAllByRole('radio').length).toEqual(4);
  });

  it('options - multiple', () => {
    const { getAllByRole } = render(<Accordion {...baseProps} multiple />);

    expect(getAllByRole('checkbox').length).toEqual(4);
  });

  it('not join', () => {
    const { container } = render(<Accordion {...baseProps} />);

    expect(container.querySelector('div')?.className).toEqual(
      'flex flex-wrap gap-2'
    );
  });

  it('join', () => {
    const { container } = render(<Accordion {...baseProps} join />);

    expect(container.querySelector('div')?.className).toEqual(
      'flex flex-wrap join join-vertical w-full'
    );
  });
});
