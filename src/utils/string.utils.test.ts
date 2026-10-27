import { getInitials, isValidUrl, sanitizeUrl } from './string.utils';

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
      ['javascript scheme rejected', 'javascript:alert(1)', false],
      [
        'data scheme rejected',
        'data:text/html,<script>alert(1)</script>',
        false
      ],
      ['url valid', 'https://www.google.com', true]
    ])('%s', (_, url, expected) => {
      expect(isValidUrl(url)).toEqual(expected);
    });
  });

  describe('sanitizeUrl', () => {
    it.each([
      ['undefined returns fallback', undefined, '#'],
      ['empty string returns fallback', '   ', '#'],
      ['javascript URI blocked', 'javascript:alert(1)', '#'],
      ['mixed-case javascript URI blocked', 'JaVaScRiPt:alert(1)', '#'],
      [
        'control-char obfuscated javascript URI blocked',
        'java\x00script:alert(1)',
        '#'
      ],
      ['data URI blocked', 'data:text/html,<script>alert(1)</script>', '#'],
      ['vbscript URI blocked', 'vbscript:msgbox(1)', '#'],
      ['unknown scheme blocked', 'custom-evil:payload', '#'],
      [
        'https URL allowed',
        'https://creativecode.com.co',
        'https://creativecode.com.co'
      ],
      [
        'mailto URL allowed',
        'mailto:info@creativecode.com.co',
        'mailto:info@creativecode.com.co'
      ],
      [
        'relative path allowed',
        '/docs/getting-started',
        '/docs/getting-started'
      ],
      ['hash anchor allowed', '#section-1', '#section-1'],
      ['plain relative segment allowed', 'docs/page', 'docs/page']
    ])('%s', (_, url, expected) => {
      expect(sanitizeUrl(url)).toEqual(expected);
    });
  });
});
