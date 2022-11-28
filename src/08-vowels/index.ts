/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  let vowelCount = s.match(/[aeiou]/gi);
  return vowelCount === null ? 0 : vowelCount.length;
}

export { vowels };
