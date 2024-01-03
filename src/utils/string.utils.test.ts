import { getInitials } from './string.utils';

describe('string utils', () => {
  it('One Name', () => {
    const name = 'FirstName';

    const result = getInitials(name);

    expect(result).toEqual('FI');
  });

  it('Two names', () => {
    const name = 'FirstName LastName';

    const result = getInitials(name);

    expect(result).toEqual('FL');
  });

  it('Three names', () => {
    const name = 'FirstName SecondName LastName';

    const result = getInitials(name);

    expect(result).toEqual('FL');
  });

  it('Four names', () => {
    const name = 'FirstName SecondName LastName SecondLastName';

    const result = getInitials(name);

    expect(result).toEqual('FL');
  });
});
