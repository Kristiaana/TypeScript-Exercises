/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
  function loop(str: string) {
    let letters: string = "";
    for (let i = 0; i < str.length; i++) {
      if (/^[a-zA-Z]+$/.test(str[i])) {
        letters += str[i];
      }
    }
    return letters;
  }

  function sortLetters(str: string) {
    return str.split("").sort().join("");
  }

  const lettersB = loop(stringB);
  const lettersA = loop(stringA);
  const sortedA = sortLetters(lettersA);
  const sortedB = sortLetters(lettersB);

  return sortedA.toLowerCase() === sortedB.toLowerCase();
}

export { anagrams };
