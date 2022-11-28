/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  const cleanInput = input
    .replace("-", " ")
    .replace(/[^A-Z\s]/gi, "")
    .split(" ");

  let result = "";

  cleanInput.forEach((word) => (result = word ? result + word[0] : result));
  return result.toUpperCase();
}

export { parse };
