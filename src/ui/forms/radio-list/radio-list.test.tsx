import { render } from '@testing-library/react';

import type { RadioItemType, RadioListType } from '@/types';

import RadioList from './radio-list.component';

const baseProps: RadioListType = {
  name: 'test',
  options: Array.from({ length: 4 }).map<RadioItemType>((_, index) => ({
    value: index,
    label: `Option ${index}`
  }))
};

describe('<RadioList />', () => {
  it('snapshot', () => {
    const { container } = render(<RadioList {...baseProps} />);

    expect(container).toMatchSnapshot();
  });

  it('options', () => {
    const { getAllByRole } = render(<RadioList {...baseProps} />);

    expect(getAllByRole('radio').length).toEqual(4);
  });

  it('not options', () => {
    const { container, asFragment } = render(
      <RadioList {...baseProps} options={[]} />
    );

    expect(container).toMatchSnapshot();

    expect(asFragment.length).toEqual(0);
  });

  it('with error', () => {
    const error = 'Error message';
    const { getByText } = render(
      <RadioList {...baseProps} isError error={error} />
    );

    expect(getByText(error)).toBeInTheDocument();
  });
});
