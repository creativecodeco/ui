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
