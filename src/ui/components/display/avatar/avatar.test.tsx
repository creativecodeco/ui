import { render } from '@testing-library/react';

import Avatar from './avatar.component';

describe('<Avatar />', () => {
  it('Snapshot', () => {
    global.URL.canParse = jest.fn(() => false);

    const { container } = render(<Avatar src='Test' />);

    expect(container).toMatchSnapshot();
  });

  it('Snapshot URL', () => {
    global.URL.canParse = jest.fn(() => true);

    const { container } = render(
      <Avatar src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
    );

    expect(container).toMatchSnapshot();
  });

  it('Get Letters', () => {
    global.URL.canParse = jest.fn(() => false);

    const { getByText } = render(<Avatar src='Test' />);

    expect(getByText('TE')).toBeInTheDocument();
  });

  it('Get Letters Two Names', () => {
    global.URL.canParse = jest.fn(() => false);

    const { getByText } = render(<Avatar src='Test Name' />);

    expect(getByText('TN')).toBeInTheDocument();
  });

  it('With status offline', () => {
    global.URL.canParse = jest.fn(() => false);

    const { getByTestId } = render(<Avatar src='Test Name' withStatus />);

    const avatar = getByTestId('avatar');

    expect(avatar.className.includes('offline')).toEqual(true);
  });

  it('With status online', () => {
    global.URL.canParse = jest.fn(() => false);

    const { getByTestId } = render(
      <Avatar src='Test Name' withStatus isOnline />
    );

    const avatar = getByTestId('avatar');

    expect(avatar.className.includes('online')).toEqual(true);
  });

  it('Rounded', () => {
    global.URL.canParse = jest.fn(() => false);

    const { getByTestId } = render(<Avatar src='Test Name' rounded />);

    const avatar = getByTestId('avatar-content');

    expect(avatar.className.includes('rounded-full')).toEqual(true);
  });

  it('Ring', () => {
    global.URL.canParse = jest.fn(() => false);

    const { getByTestId } = render(<Avatar src='Test Name' ring />);

    const avatar = getByTestId('avatar-content');

    expect(avatar.className.includes('avatar-ring')).toEqual(true);
  });
});
