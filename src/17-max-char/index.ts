/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
  let counter: { [key: string]: number } = {};

  for (let char of str) {
    counter[char] ? counter[char]++ : (counter[char] = 1);
  }

  let maxCount = 0;
  let mostFrequent;

  for (let key in counter) {
    if (counter[key] > maxCount) {
      maxCount = counter[key];
      mostFrequent = key;
    }
  }
  return mostFrequent;
}

export { maxChar };
