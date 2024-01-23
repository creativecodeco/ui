import { fireEvent, render } from '@testing-library/react';

import Button from './button.component';
import { FaAd, FaAdn } from 'react-icons/fa';

describe('<Button />', () => {
  it('snapshot', () => {
    const { container } = render(<Button>Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('snapshot all props', () => {
    const { container } = render(
      <Button
        color='primary'
        size='lg'
        icon={FaAd}
        iconPosition='right'
        disabled
      >
        Button
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  it('safe props click', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button onClick={onClick}>Button</Button>);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('safe props disabled click', () => {
    const onClick = jest.fn();

    const { getByRole } = render(
      <Button disabled onClick={onClick}>
        Button
      </Button>
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('Button with icon', () => {
    const { container } = render(<Button icon={FaAdn}>Button</Button>);

    const svgIcon = container.querySelector('svg');

    expect(svgIcon).toBeInTheDocument();
  });

  it('Color primary', () => {
    const { container } = render(<Button color='primary'>Button</Button>);

    expect(container.querySelector('button')?.className).toEqual(
      'button button-color-primary'
    );
  });

  it('Size lg', () => {
    const { container } = render(<Button size='lg'>Button</Button>);

    expect(container.querySelector('button')?.className).toEqual(
      'button button-size-lg'
    );
  });

  it('Outline', () => {
    const { container } = render(<Button outline>Button</Button>);

    expect(container.querySelector('button')?.className).toEqual(
      'button button-outline'
    );
  });

  it('Link', () => {
    const { container } = render(<Button isLink>Button</Button>);

    expect(container.querySelector('button')?.className).toEqual(
      'button button-link'
    );
  });

  it('Loading', () => {
    const { getByRole } = render(<Button loading>Button</Button>);

    const button = getByRole('button');
    console.log(button.firstChild);

    expect((button.firstChild as HTMLSpanElement).className).toBe(
      'span-loading'
    );
  });

  it('Loading with label', () => {
    const loadingLabel = 'Loading...';
    const { getByText } = render(
      <Button loading loadingLabel={loadingLabel}>
        Button
      </Button>
    );

    expect(getByText(loadingLabel)).toBeInTheDocument();
  });
});
