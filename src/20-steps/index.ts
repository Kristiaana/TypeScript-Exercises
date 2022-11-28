/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
  for (let i = 1; i <= n; i++) {
    let shape: string = "";

    for (let k = 0; k < i; k++) {
      shape += "#";
    }

    for (let j = n; j > i; j--) {
      shape += " ";
    }

    console.log(shape);
    shape += "\n";
  }
}

export { steps };
