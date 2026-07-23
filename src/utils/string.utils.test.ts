import { getInitials, isValidUrl } from './string.utils';

describe('string utils', () => {
  describe('getInitials', () => {
    it.each([
      ['One Name', 'FirstName', 'FI'],
      ['Two names', 'FirstName LastName', 'FL'],
      ['Three names', 'FirstName SecondName LastName', 'FL'],
      ['Four names', 'FirstName SecondName LastName SecondLastName', 'FL']
    ])('%s', (_, name, expected) => {
      expect(getInitials(name)).toEqual(expected);
    });
  });

  describe('isValidUrl', () => {
    it.each([
      ['undefined', undefined, false],
      ['url invalid', 'text', false],
      ['url valid', 'https://www.google.com', true]
    ])('%s', (_, url, expected) => {
      expect(isValidUrl(url)).toEqual(expected);
    });
  });
});
