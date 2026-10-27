/**
 * Generates initials from the given name.
 *
 * @remarks
 * This function takes a full name as input and returns the initials.
 *
 * @param name - The full name from which initials are generated.
 * @returns The initials generated from the name.
 *
 * @example
 * ```typescript
 * // Example 1:
 * const name1 = "John Doe";
 * const initials1 = getInitials(name1);
 * console.log(initials1); // Output: "JD"
 *
 * // Example 2:
 * const name2 = "Alice Bob Charlie";
 * const initials2 = getInitials(name2);
 * console.log(initials2); // Output: "AC"
 * ```
 *
 * @public
 */
export function getInitials(name: string): string {
  const words = name.split(' ');

  const getCharAt = (word: string) => word.charAt(0).toUpperCase();

  if (words.length === 1) {
    return name.substring(0, 2).toUpperCase();
  }

  if (words.length === 2) {
    return words.map(getCharAt).join('');
  }

  return words
    .filter((_, index) => index % 2 === 0)
    .map(getCharAt)
    .join('');
}

/**
 * Checks whether the provided string is a valid URL.
 *
 * @param uri - The string to be checked as a URL.
 * @returns A boolean indicating whether the provided string is a valid URL.
 *
 * @remarks
 * This function uses the URL constructor to validate whether the input is a well-formed URL.
 * It returns true if the URL is valid and false otherwise.
 *
 * @example
 * ```typescript
 * // Example 1:
 * const url1 = "https://www.example.com";
 * const isValid1 = isValidUrl(url1);
 * console.log(isValid1); // Output: true
 *
 * // Example 2:
 * const url2 = "not_a_valid_url";
 * const isValid2 = isValidUrl(url2);
 * console.log(isValid2); // Output: false
 * ```
 *
 * @public
 */
export function isValidUrl(uri?: string) {
  if (!uri) {
    return false;
  }

  try {
    const parsed = new URL(uri);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

const SAFE_URL_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);
const UNSAFE_SCHEME_REGEX = /^\s*(?:javascript|vbscript|data)\s*:/i;

/**
 * Sanitizes a URL string to prevent XSS via `javascript:`, `vbscript:`, or `data:` URI schemes.
 * Allows relative URLs (`/`, `#`, `?`, `./`, `../`) and safe protocols (`http:`, `https:`, `mailto:`, `tel:`).
 *
 * @param uri - The URL string to sanitize.
 * @param fallback - Fallback URL when the input is unsafe or empty (defaults to `'#'`).
 * @returns A safe URL string.
 */
export function sanitizeUrl(uri?: string, fallback = '#'): string {
  if (!uri) {
    return fallback;
  }

  // Strip Unicode control characters and whitespace
  const cleaned = uri.replace(/\p{Cc}+/gu, '').trim();
  if (!cleaned) {
    return fallback;
  }

  if (UNSAFE_SCHEME_REGEX.test(cleaned)) {
    return fallback;
  }

  // Allow relative paths, query strings, and fragment identifiers
  if (
    cleaned.startsWith('/') ||
    cleaned.startsWith('#') ||
    cleaned.startsWith('?') ||
    cleaned.startsWith('./') ||
    cleaned.startsWith('../')
  ) {
    return cleaned;
  }

  try {
    const parsed = new URL(cleaned);
    return SAFE_URL_PROTOCOLS.has(parsed.protocol) ? cleaned : fallback;
  } catch {
    // Relative path without leading slash (e.g. "docs/getting-started")
    return /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(cleaned) ? fallback : cleaned;
  }
}
