import { fireEvent, render, screen } from '@testing-library/react';

import Dropdown from './dropdown.component';

import type { DropdownOption } from '@/types';

const options = Array.from({ length: 5 }).map<DropdownOption>((_, index) => ({
  value: index,
  label: `Option ${index}`
}));

describe('<Dropdown />', () => {
  it('snapshot', () => {
    const { container } = render(<Dropdown name='test' />);

    expect(container).toMatchSnapshot();
  });

  it('snapshot full', () => {
    const { container } = render(
      <Dropdown name='test' label='Label' isError error='Error' disabled />
    );

    expect(container).toMatchSnapshot();
  });

  it('default value', () => {
    const { getByTestId } = render(
      <Dropdown name='test' options={options} value='2' />
    );

    const control = getByTestId('test');

    expect((control as HTMLInputElement).value).toEqual('Option 2');
  });

  it('focus', () => {
    const { getByTestId } = render(<Dropdown name='test' options={options} />);

    const textBox = getByTestId('test');

    fireEvent.focus(textBox);

    expect(screen.getByTestId('options-test')).toBeInTheDocument();
  });

  it('focus disabled', async () => {
    const { getByTestId } = render(
      <Dropdown name='test' options={options} disabled />
    );

    const textBox = getByTestId('test');

    fireEvent.focus(textBox);

    const notExists = screen.queryByTestId('options-test');
    expect(notExists).not.toBeInTheDocument();
  });

  it('selects an option on click', () => {
    const onChangeMock = jest.fn();

    const { getByTestId, getByText } = render(
      <Dropdown name='test' options={options} onChange={onChangeMock} />
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
      <Dropdown name='test' data-testid='textbox' options={options} />
    );

    const textBox = getByTestId('textbox');

    fireEvent.focus(textBox);

    fireEvent.change(textBox, { target: { value: 'NuevoValor' } });

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
      <Dropdown name='test' onTextChange={onTextChangeMock} options={options} />
    );
    const textBox = getByTestId('test');

    fireEvent.change(textBox, { target: { value: 'NuevoValor' } });

    expect(onTextChangeMock).toHaveBeenCalledWith('NuevoValor');
  });

  it('handles change correctly with option', () => {
    const onTextChangeMock = jest.fn();
    const { getByTestId } = render(
      <Dropdown name='test' onTextChange={onTextChangeMock} options={options} />
    );
    const textBox = getByTestId('test');

    fireEvent.change(textBox, { target: { value: 'Option' } });

    expect(onTextChangeMock).toHaveBeenCalledWith('Option');
  });
});
