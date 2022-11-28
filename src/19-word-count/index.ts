/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    const elements = str
      .toLowerCase()
      .replace(/\n/g, " ")
      .replace(/\t/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ");

    const result: { [key: string]: number } = {};

    elements.forEach((element) => {
      result[element] = (+result[element] || 0) + 1;
    });

    return result;
  }
}

export { Words };
