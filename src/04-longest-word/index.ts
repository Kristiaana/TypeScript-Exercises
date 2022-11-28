/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
  let maxChars = 0;
  let theLongest = "place holder";
  let cleanInput = sen.replace(/[^A-Z\s]/gi, "").split(" ");

  cleanInput.forEach((element) => {
    if (element.length > maxChars) {
      maxChars = element.length;
      theLongest = element;
    }
  });

  return theLongest;
}

export { longestWord };
