/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const EVEN_NUMS = [0, 2, 4, 6, 8];

function isEven(n: number) {
  const beforeDecimalPoint = n.toString().split(".")[0];
  const lastDigit = Number(beforeDecimalPoint[beforeDecimalPoint.length - 1]);

  return EVEN_NUMS.includes(lastDigit);
}

export { isEven };
