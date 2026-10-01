import { render } from '@testing-library/react';

import { FaAd } from 'react-icons/fa';

import Badge from './badge.component';

describe('<Badge />', () => {
  it('snapshot', () => {
    const { container } = render(<Badge>Badge</Badge>);

    expect(container).toMatchSnapshot();
  });

  it('snapshot all props', () => {
    const { container } = render(
      <Badge color='primary' icon={FaAd} iconPosition='right' outline size='lg'>
        Badge
      </Badge>
    );

    expect(container).toMatchSnapshot();
  });

  it('Badge with icon left', () => {
    const { container } = render(<Badge icon={FaAd}>Badge</Badge>);

    const svgIcon = container.querySelector('svg');

    expect(svgIcon).toBeInTheDocument();
  });

  it('Badge with icon right', () => {
    const { container } = render(
      <Badge icon={FaAd} iconPosition='right'>
        Badge
      </Badge>
    );

    const svgIcon = container.querySelector('svg');

    expect(svgIcon).toBeInTheDocument();
  });

  it('Color primary', () => {
    const { container } = render(<Badge color='primary'>Badge</Badge>);

    expect(container.querySelector('div')?.className).toEqual(
      'badge badge-color-primary'
    );
  });

  it('Size lg', () => {
    const { container } = render(<Badge size='lg'>Badge</Badge>);

    expect(container.querySelector('div')?.className).toEqual(
      'badge badge-size-lg'
    );
  });

  it('Outline', () => {
    const { container } = render(<Badge outline>Badge</Badge>);

    expect(container.querySelector('div')?.className).toEqual(
      'badge badge-outline'
    );
  });

  it('Outline Color', () => {
    const { container } = render(
      <Badge outline color='primary'>
        Badge
      </Badge>
    );

    expect(container.querySelector('div')?.className).toEqual(
      'badge badge-primary badge-outline'
    );
  });
});
