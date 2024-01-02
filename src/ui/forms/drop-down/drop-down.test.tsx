import { fireEvent, render, screen } from '@testing-library/react';

import DropDown from './drop-down.component';

import type { DropDownOption } from '@/types';

const options = Array.from({ length: 5 }).map<DropDownOption>((_, index) => ({
  value: index,
  label: `Option ${index}`
}));

describe('<DropDown />', () => {
  it('snapshot', () => {
    const { container } = render(<DropDown name='test' />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full', () => {
    const { container } = render(
      <DropDown name='test' label='Label' isError error='Error' disabled />
    );

    expect(container).toMatchSnapshot();
  });

  it('focus', () => {
    const { getByTestId } = render(<DropDown name='test' options={options} />);

    const textBox = getByTestId('test');

    fireEvent.focus(textBox);

    expect(screen.getByTestId('options-test')).toBeInTheDocument();
  });

  it('focus disabled', async () => {
    const { getByTestId } = render(
      <DropDown name='test' options={options} disabled />
    );

    const textBox = getByTestId('test');

    fireEvent.focus(textBox);

    const notExists = screen.queryByTestId('options-test');
    expect(notExists).not.toBeInTheDocument();
  });

  it('selects an option on click', () => {
    const onChangeMock = jest.fn();

    const { getByTestId, getByText } = render(
      <DropDown name='test' options={options} onChange={onChangeMock} />
    );

    const textBox = getByTestId('test');
    fireEvent.focus(textBox);

    const optionToSelect = getByText('Option 1');
    fireEvent.click(optionToSelect);

    expect(onChangeMock).toHaveBeenCalledWith({
      target: { value: '1' }
    });
  });

  it('closes the dropdown on click outside', () => {
    const { getByTestId } = render(
      <DropDown name='test' data-testid='textbox' />
    );

    const textBox = getByTestId('textbox');

    fireEvent.focus(textBox);

    expect(screen.getByTestId('options-test')).toBeInTheDocument();

    fireEvent(
      document.body,
      new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true
      })
    );

    const notExists = screen.queryByTestId('options-test');
    expect(notExists).not.toBeInTheDocument();
  });

  it('handles change correctly', () => {
    const onTextChangeMock = jest.fn();
    const { getByTestId } = render(
      <DropDown name='test' onTextChange={onTextChangeMock} />
    );
    const textBox = getByTestId('test');

    fireEvent.change(textBox, { target: { value: 'NuevoValor' } });

    expect(onTextChangeMock).toHaveBeenCalledWith('NuevoValor');
  });

  it('handles change correctly with option', () => {
    const onTextChangeMock = jest.fn();
    const { getByTestId } = render(
      <DropDown name='test' onTextChange={onTextChangeMock} options={options} />
    );
    const textBox = getByTestId('test');

    fireEvent.change(textBox, { target: { value: 'Option' } });

    expect(onTextChangeMock).toHaveBeenCalledWith('Option');
  });
});
