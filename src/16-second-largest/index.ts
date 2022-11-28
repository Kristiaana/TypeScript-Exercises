/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
  function loop(numArr: number[]) {
    let Largest = 0;
    numArr.forEach((num) => {
      if (num > Largest) {
        Largest = num;
      }
    });
    return Largest;
  }

  const firstLargest = loop(array);

  const altered = array.filter((num) => num !== firstLargest);

  const secondLargest = loop(altered);

  return secondLargest;
}

export { secondLargest };
