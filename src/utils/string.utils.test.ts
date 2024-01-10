import { getInitials, isValidUrl } from './string.utils';

describe('string utils', () => {
  describe('getInitials', () => {
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

  describe('isValidUrl', () => {
    it('undefined', () => {
      const valid = isValidUrl();

      expect(valid).toEqual(false);
    });

    it('url invalid', () => {
      const valid = isValidUrl('text');

      expect(valid).toEqual(false);
    });

    it('url valid', () => {
      const valid = isValidUrl('https://www.google.com');

      expect(valid).toEqual(true);
    });
  });
});
