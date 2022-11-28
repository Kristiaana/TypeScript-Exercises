/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number): void {
  for (let i = 1; i <= n; i++) {
    let output: string = "";

    for (let j = n; j > i; j--) {
      output += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      output += "#";
    }

    for (let j = n; j > i; j--) {
      output += " ";
    }
    console.log(output);
    output += "\n";
  }
}

export { pyramid };
